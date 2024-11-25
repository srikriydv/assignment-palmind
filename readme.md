# User Registration and Login Project

This project demonstrates a simple user registration and login system using a frontend (HTML, CSS, JavaScript) and a backend (Node.js, Express, MongoDB).

## Screenshot
##### HomePage:
![Screenshot 2024-11-25 at 7 57 00 PM](https://github.com/user-attachments/assets/ff1962d6-06d6-4505-9224-64c0aabd7fa2)
##### Login Page:
![Screenshot 2024-11-25 at 7 57 53 PM](https://github.com/user-attachments/assets/11dde150-d5d6-4044-bce3-bcfdee188983)
##### Register Page:
![Screenshot 2024-11-25 at 7 57 46 PM](https://github.com/user-attachments/assets/c24e2933-3f4e-4728-a2aa-eebd8967a494)
##### Modal Preview
![Screenshot 2024-11-25 at 8 04 24 PM](https://github.com/user-attachments/assets/29fb08e1-2e95-47ad-9798-3de56384ae84)



## Project Structure
```
project/
├── backend/                     # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/              # Configuration files
│   │   │   └── db.js            # Database connection and config
│   │   ├── controllers/         # Controllers for handling logic
│   │   │   └── user.controller.js
│   │   ├── models/              # Mongoose models or database schemas
│   │   │   └── user.model.js
│   │   ├── routes/              # Routes for API endpoints
│   │   │   └── user.route.js
│   │   └── server.js            # Main server file
│   ├── package.json             # Node dependencies
│   └── package-lock.json        # Lock file
│
├── frontend/                    # Frontend (HTML, CSS, JS)
│   ├── index.html               # Main HTML file
│   ├── script.js                # Frontend JavaScript
│   └── styles.css               # (Optional) Custom CSS (if needed)
│
└── README.md                    # Project documentation
```
## Features

- **User Registration**: Users can create an account with their name, email, and password.
- **User Login**: Registered users can log in using their email and password.
- **Home Page**: After successful login, the user is redirected to a home page showing all registered users.
- **Logout**: Users can log out, which will clear their session and redirect them to the registration page.
- **Responsive UI**: The interface adjusts based on whether the user is logged in or not.

## Frontend

The frontend is built with:

- **HTML**: Structure of the web pages (registration, login, home).
- **CSS**: (Optional) Styling for the web pages.
- **JavaScript**: Handles form submission, user authentication, and dynamic page rendering based on the login state.

### HTML (index.html)

The HTML provides the structure for the following sections:

- **Registration Form**: For new users to sign up.
- **Login Form**: For registered users to log in.
- **Home Page**: Displays all registered users after login.

### JavaScript (script.js)

- Handles the submission of registration and login forms.
- Makes API requests to the backend for user registration, login, and fetching user data.
- Displays appropriate sections based on the user’s login state (login, register, home).
- Stores the authentication token in the browser's localStorage for session management.

### API Interaction

The frontend communicates with the backend using **Axios** to send HTTP requests for:

- **POST** `/register`: Registers a new user.
- **POST** `/login`: Authenticates the user and generates a JWT token.
- **GET** `/users`: Fetches the list of all registered users.

## Backend

The backend is built with **Node.js**, **Express**, and **MongoDB**:

### Dependencies

- **Express**: Web framework for building the server.
- **Mongoose**: MongoDB object modeling tool.
- **Bcrypt**: Library for hashing and comparing passwords.
- **JWT (JSON Web Token)**: Used for creating and verifying authentication tokens.
- **CORS**: Allows cross-origin requests between the frontend and backend.
- **Body-Parser**: Middleware for parsing incoming request bodies.

### Server (server.js)

- **Register User**: Accepts name, email, and password, hashes the password, and saves the user to the database.
- **Login User**: Authenticates the user by comparing the hashed password and returns a JWT token.
- **Fetch All Users**: Returns a list of all registered users (excluding passwords).

## How to Run

### Backend

1. **Install Dependencies**:
   Navigate to the `backend` directory and install dependencies:
    ```bash
    npm install
    ```

2.	**Start the Server:**
Start the backend server by running:
    ```bash
    node server.js
    ```
The server will be available at http://localhost:3000.

#### Frontend

1.	Open the frontend/index.html file in your browser.
2.	Test the registration, login, and logout functionality.

#### Testing

**1.	Register a User:** Enter a name, email, and password to register.
**2.	Login:** After registration, use the login form to authenticate the user.
**3.	Home Page:** Upon successful login, you will be redirected to the home page, which lists all registered users.
**4.	Logout:** Click the logout button to end the session and return to the registration page.

