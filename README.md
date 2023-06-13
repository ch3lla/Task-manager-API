# Task Manager API

The Task Manager API is a robust and secure task management system that provides a set of endpoints for creating, updating, and managing tasks. It includes user authentication using JSON Web Tokens (JWT) and password hashing using bcrypt. Additionally, the API offers user registration and login functionality to enable secure access to the task management system.

## Features

- User registration: New users can create an account by providing their email and password.
- User login: Registered users can log in using their email and password to obtain a JWT token for authentication.
- Task management: Authenticated users can create, retrieve, update, and delete tasks.
- JWT authentication: All API endpoints (except user registration and login) require valid JWT tokens for authentication.
- Password hashing: User passwords are securely hashed using bcrypt before being stored in the database.

## Installation

To install and run the Task Manager API locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/ch3lla/task-manager-api.git
   cd task-manager-api
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the project root directory.
   - Add the following variables to the `.env` file:

     ```
     PORT=3000
     DATABASE_URL=mongodb://localhost:27017/task_manager_db
     JWT_SECRET=your_jwt_secret
     ```

     Note: Replace `your_jwt_secret` with a strong secret key for JWT token generation.

4. Start the API:

   ```
   npm start
   ```

   The API will start running on `http://localhost:3000`.

## API Endpoints

### User Registration

- `POST /api/register`

  Creates a new user account.

  Request body:

  ```
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```

  Response:

  ```
  {
    "message": "User registered successfully."
  }
  ```

### User Login

- `POST /api/login`

  Authenticates a user and returns a JWT token.

  Request body:

  ```
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```

  Response:

  ```
  {
    "token": "your_jwt_token"
  }
  ```

### Task Management

- `GET /api/tasks`

  Retrieves all tasks for the authenticated user.

  Response:

  ```
  {
    "tasks": [
      {
        "id": "task_id_1",
        "title": "Task 1",
        "description": "Task 1 description"
      },
      {
        "id": "task_id_2",
        "title": "Task 2",
        "description": "Task 2 description"
      }
    ]
  }
  ```

- `POST /api/tasks`

  Creates a new task for the authenticated user.

  Request body:

  ```
  {
    "title": "New Task",
    "description": "New task description"
  }
  ```

  Response:

  ```
  {
    "message": "Task created successfully.",
    "task": {
      "id": "new_task_id",
      "title": "New Task",
      "description": "New task description"
    }
  }
  ```

- `PUT /api/tasks/:taskId`

  Updates an existing task.

  Request body:

  ```
  {
    "title": "Updated Task",
    "description": "Updated task description"
  }
  ```

  Response:

  ```
  {
    "message": "Task updated successfully."
  }
 

 ```

- `DELETE /api/tasks/:taskId`

  Deletes an existing task.

  Response:

  ```
  {
    "message": "Task deleted successfully."
  }
  ```

## Security

The Task Manager API implements several security measures to protect user data and ensure secure access to the system:

- Passwords are securely hashed using bcrypt, ensuring that they are never stored in plain text.
- JWT tokens are generated with a secret key and have an expiration time to prevent unauthorized access.
- API endpoints (except registration and login) require valid JWT tokens for authentication.
- User input is validated and sanitized to prevent common security vulnerabilities such as SQL injection and cross-site scripting (XSS).

## Conclusion

The Task Manager API provides a secure and efficient way to manage tasks. By leveraging JWT authentication and bcrypt password hashing, it ensures that user data remains protected. The provided endpoints allow users to register, log in, and perform CRUD operations on tasks. Feel free to explore and integrate this API into your applications for efficient task management.