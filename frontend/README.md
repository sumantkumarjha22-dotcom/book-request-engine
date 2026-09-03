# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

project

📚 My Library

Search:
[ React____________ ] [Search]

--------------------------------

📘 Learning React
Alex Banks
⭐ 4.5

[Add to Library]

--------------------------------

📘 Eloquent JavaScript
Marijn Haverbeke

[Add to Library]

--------------------------------

My Library

☑ Learning React
✏️ Edit
🗑 Delete

☐ Clean Code
✏️ Edit
🗑 Delete





1. Sign up -- A student can fill up the form to register onto the Library management portal
2. Generate a student ID after successful signup
	i. After successful signup we should redirect the user to the log in page
3. Log in -- Existing student can log in
	i. How to store the sign up information in local DB 
	ii. At the time of log in authenticate the username and password from the local DB and then allow log in
	
4. After log in we should be able to see the name on the top right corner with profile , Books collected and log out option
	i. In the books collected section we should be able to see 
		a. Book name , Book id , Collect date , submite_date , latest_submit_date , fine_charged
		b. fine_charged is calculated based on
				a. submit date should be null
				b. latest_submit_date should be more than current date
				c. 4*(current_date - latest_submit_date)
				
5. After log in student should land on Booklist page 
	i. Books should be shown in cards with below details 
		a. Coverpage photo
		b. Book name 
		c. Book id
		d. Collect button

------------------------------------------------------------------------------------
date:22/08/2026            |
---------------------------|

On the home page Create two button 
	1. Student 
	2. Admin
-----------------STUDENT-----------------
1. Log in or SignUP 
2. After log in he/she will be able to see the list of Books 
3. If the student clicks on Collect button then the first thing that should be checked is if the books is available to be collected
4. If the book is not available then a message should be displayed "This book is not available"
5. If book is available to be given in the library then the message should be "2 book is available , Please reach out to library counter to collect the book" 
-----------------ADMIN (Librarian)-------------------
1. Log in -- username and password will be fixed
2. Book List and the count of available books
	Book id , book name , writer name , standard , count of books 
3.
	


-------------------------------
25/08/26
----------------------------

-----------------On the home page Create two button 
 1. Student 
 2. Admin
---------------------------STUDENT-----------------
1. Log in or SignUP 
2. After log in he/she will be able to see the list of Books 
3. If the student clicks on Collect button then the first thing that should be checked is if the books is available to be collected
4. If the book is not available then a message should be displayed "This book is not available"
5. If book is available to be given in the library then the message should be "2 book is available , Please reach out to library counter to collect the book" 
6. In the student section there should be a collected Books section that should display all the books collected by the student along with these information 	
	i. Book id , book name , collect_date , submit date , fine_charge 
7. As soon as a student clicks on Collect book then there should be collect requested generated to the admin which they can approve or reject based on availability of the book or if the student has already collected the same book
-----------------ADMIN (Librarian)-------------------
1. Log in -- username and password will be fixed
2. Book List and the count of available books
	Book id , book name ,Subject , writer name  , standard , count of books -- All are editable fields -- Schema maintain 
3. UI  for Collect request List 
	 Student ID , Student name , Book ID , Book name , Issue Book (Button) , Reject request (Button), Reason for request
	 
-------------------------------AI extension--------------------------------
1. Connect Gemini to DB 
2. How many books of HC Verma are available ? -> 50




--------------------



   