# Project Name: SignUp App

This is a simple web application built using Next.js and Tailwind CSS, deployed on Vercel. The project includes three main pages: `Login`, `Account`, and `Signup`. User data is stored in session storage, and React Context is used for managing the application's state.

## Features

- **Login Page**: Users can enter their credentials to log in. If the credentials are correct, they are redirected to the `Account` page.

- **Account Page**: Once logged in, users can see their account details, such as their username and email. They can also log out from this page.

- **Signup Page**: Users can create a new account by providing a username and email and birthday and password. After successfully signing up, they are redirected to the `Account` page.

- **Session Storage**: User data, including login status, username, and email, is stored in session storage. This ensures that the user remains logged in across different pages during their session.

- **React Context**: The application uses React Context to manage global state. This includes the user's login status and user data.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/MOHAMMADHMEAD/signup-form
   ```

2. Navigate to the project directory:

   ```bash
   cd signup-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Demo

https://signup-form-3493.vercel.app

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered web applications.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.

- [Vercel](https://vercel.com/): A cloud platform for hosting web applications.

- [React Context](https://reactjs.org/docs/context.html): A React feature for managing state across components.