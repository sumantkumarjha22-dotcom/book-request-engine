import mongoose from "mongoose";
import { User } from "../models/users.model.js"
import { asynchandeler } from "../utiles/asynchandeler.utiles.js";
// import { use } from "react";
import { ApiError } from "../utiles/api_error.utiles.js";
import { ApiResponse } from "../utiles/api_response.utiles.js";
import { CollectRequest } from "../models/CollectRequest.js";
import { collectedbook } from "./book.controler.js";

const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
}
const userregister = asynchandeler(async (req, res) => {
  console.log("Headers:", req.headers);
  try {

    const { email, password, number, username, fullname } = req.body;


    //checks if all the fields is  filled up in front 


    if ([fullname, password, email, username, number].some((filed) => filed.trim() === "")) {
      throw new ApiError(404, "all filed reqired")
      console.log("all fields requires")

    }
    // check if user exists


    const existeduser = await User.findOne(

      {
        $or: [{ email }, { username }]
      }
    )
    if (existeduser) {
      console.log("user exist")

    }


    const user = await User.create(
      {
        fullname,
        password,
        email,
        number,
        username: username.toLowerCase()

      }
    )


    const create_user = await User.findById(user._id).select(
      "-password -refresh_token"
    )

    if (!create_user) {
      throw new ApiError(202, "error in created_user")
      console.log("somthing  went wrong");
    }



    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          {
            create_user
          },
          "user regisred succesful"
        )
      )
  }


  catch (error) {

    console.log("REGISTER ERROR:", error);
    throw error;
  }


})

const login_user = asynchandeler(async (req, res) => {
  
  try {
    const { username, email, password } = req.body;
    if (!username && !email) {
      throw new ApiError(400, "username or email is required");
    }


    const user = await User.findOne({
      $or: [{ username }, { email }]
    })

    if (!user) {
      throw new ApiError(404, "user not find ")
    }

    const check_password = await user.is_password_correct(password);

    if (!check_password) {
      throw new ApiError(404, "enter valid password")
    }
     
       

    const creat_accesstoken = await user.creat_access_token()
    const creat_refreshtoken = await user.creat_refresh_token()


    user.refreshtoken = creat_refreshtoken;
    await user.save({ validateBeforeSave: false });

    const loggeduser = await User.findById(user._id).select("-password -refreshtoken")
    return res
      .status(200)
      .cookie("accesstoken", creat_accesstoken, options)
      .cookie("refreshtoken", creat_refreshtoken, options)
      .json(
        new ApiResponse(
          200, { loggeduser }, "looged in successfull"
        )
      )
  } catch (error) {
  console.error("Login error:", error);
  throw error; // let asynchandeler format and send it
}
})


const send_user_deatils = asynchandeler(async (req,res) => {
  const userdetails=req.user;

console.log(userdetails)


  return res
  .status(200)
  
 .json(
  new ApiResponse(200,{userdetails},"good")
 )
  
})
const logout_user = asynchandeler(async (req, res) => {

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshtoken: 1 // this removes the field from document
      }
    },
    {
     new:true  
    }
  )
  return res
    .status(202)
    .clearCookie("accesstoken", options)
    .clearCookie("refreshtoken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))



})


const user_profile = asynchandeler(async (req,res) => {


  const userprofile = await User.findById(req.user._id).select("-password -refreshtoken")
    if (!userprofile) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(
       new ApiResponse(
        200,
        {userprofile},
        "profile fetched succcesful"
       )
      )
    



})


const giveusercollectrequest = asynchandeler(async(req,res)=>{
     console.log( "id is ",req.user._id.toString())
   try {
     const findcollectedbook = await CollectRequest.find({
       UserId:req.user._id.toString()
     })
    console.log("findcollectedbook",findcollectedbook
      
    )
     if(findcollectedbook.length<=0){
       throw new ApiError(200,"you have no collected book")
     }

     return res
     .status(200)
     .json(
      new ApiResponse(200,{findcollectedbook},"send")
     )
   } catch (error) {
       console.log("error in giveusercollectrequest " ,error.message)
       return res
     .status(200)
     .json(
      new ApiResponse(404,{},"something went wrong in giveusercollectrequest ")
     )
      
   }  

    


})


export { userregister, login_user, logout_user, user_profile ,send_user_deatils ,giveusercollectrequest }