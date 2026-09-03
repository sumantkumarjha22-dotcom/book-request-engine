import { Allbook } from "../models/allbook.models.js";
import { ApiResponse } from "../utiles/api_response.utiles.js";

const getallbook = async (req, res) => {

    try {

        const books = await Allbook.find();

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    { books },
                    "Successfully fetched books"
                )
            );

    } catch (error) {

        console.log(
            "Error in getallbook in admin controller:",
            error.message
        );

        return res
            .status(500)
            .json(
                new ApiResponse(
                    500,
                    {},
                    "Failed to fetch books"
                )
            );
    }
};

export { getallbook };