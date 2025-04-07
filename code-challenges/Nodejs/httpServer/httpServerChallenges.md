# Node.js Challenges

Here are 4 Node.js challenges, ranging from basic to advanced levels, that you might encounter in real-world job scenarios. These challenges cover a variety of topics, including HTTP servers, REST APIs, WebSockets, authentication, rate limiting, and more.

---

## 1. **Basic Challenge: Build a Simple HTTP Server**
   - **Time:** 1-2 hours
   - **Description:**  
     Create a simple HTTP server in Node.js that responds with `"Hello, World!"` to every incoming request. This will help you understand the basics of HTTP server creation and request handling in Node.js.

   - **Requirements:**
     - Set up an HTTP server using the `http` module.
     - Configure the server to listen on a port (e.g., 3000).
     - Implement basic request handling so that every request, regardless of the route or method, responds with `"Hello, World!"`.
     - Return the correct status code (200 OK).
     - Handle different HTTP methods (GET, POST, etc.) even if they all return the same message.
     - Log incoming requests for debugging and monitoring purposes.

   - **Skills:**
     - **HTTP Server**: Understand how to set up an HTTP server.
     - **Node.js `http` module**: Learn to handle HTTP requests and responses.
     - **Basic Routing**: Understand how to handle different HTTP methods.

   - **Possible Extensions:**
     - Extend this server to handle different routes, returning different messages depending on the URL path.
     - Add a basic logging mechanism to track request details.

---

## 2. **Intermediate Challenge: Build a REST API for Managing Users**
   - **Time:** 2-3 hours
   - **Description:**  
     Build a RESTful API that allows clients to create, read, update, and delete (CRUD) user information. The user data can be stored in memory for simplicity, or you can use a file-based solution like JSON to persist data.

   - **Requirements:**
     - Use **Express.js** to set up the API and define routes.
     - Implement at least four routes: `GET /users`, `POST /users`, `PUT /users/:id`, `DELETE /users/:id`.
     - Each user should have at least a `name` and `email` property (you can add more attributes if needed).
     - **Validation**: Implement basic validation to ensure that data passed in POST and PUT requests is valid (e.g., check for empty fields or incorrect formats).
     - **Storage**: Store the users in memory (or in a simple JSON file).
     - **Error handling**: Return appropriate HTTP status codes (e.g., `404` for not found, `400` for bad request).

   - **Skills:**
     - **Express.js**: Learn how to create routes and handle different HTTP methods.
     - **CRUD Operations**: Understand the basic Create, Read, Update, and Delete operations.
     - **Data Validation**: Implement basic checks for input validation.
     - **Error Handling**: Handle common HTTP errors and respond appropriately.

   - **Possible Extensions:**
     - Add more complex validation (e.g., checking email format).
     - Implement user authentication for private routes (JWT or sessions).
     - Add logging for API requests and errors.

---

## 3. **Senior Challenge: Build a Real-Time Chat Application with WebSockets**
   - **Time:** 3-4 hours
   - **Description:**  
     Implement a real-time chat application where users can join different chat rooms and send messages to each other. Use **Socket.io** to enable WebSocket-based communication.

   - **Requirements:**
     - Set up a basic chat server using **Socket.io** (both server-side and client-side).
     - Allow users to join different chat rooms (e.g., `room1`, `room2`).
     - Handle real-time messaging: Messages sent by one user should appear in real-time for all users in the same room.
     - Implement basic UI using HTML and CSS to show the chat messages.
     - Handle user connections and disconnections, sending a notification to the room when a user joins or leaves.
     - Implement message persistence, either in memory or using a simple file-based storage (e.g., JSON file).

   - **Skills:**
     - **WebSockets & Socket.io**: Understand real-time, bidirectional communication.
     - **Event Handling**: Use events to handle connections, messages, and disconnections.
     - **Chat Rooms**: Implement multi-room chat functionality.
     - **Basic Frontend (optional)**: Build a simple UI to interact with the chat.

   - **Possible Extensions:**
     - Implement private messaging.
     - Use a database to persist chat history across sessions.
     - Add features like user authentication (login/logout) using sessions or JWT.

---

## 4. **Advanced Challenge: Build a Scalable API with JWT Authentication, Rate Limiting, and Logging**
   - **Time:** 4-5 hours
   - **Description:**  
     Create a production-ready, scalable API with **JWT authentication**, **rate limiting** to protect against abuse, and **request logging** for monitoring. Use MongoDB or another database to store user data and implement user registration and login.

   - **Requirements:**
     - **JWT Authentication**: Implement a secure login and registration system using **JWT** for token-based authentication.
     - **Rate Limiting**: Implement rate limiting on the API to restrict the number of requests a user can make within a certain time period (use libraries like **express-rate-limit**).
     - **Logging**: Integrate a logging system (e.g., **Winston** or **Morgan**) to log requests, errors, and other critical information.
     - **MongoDB (or another DB)**: Use a database like MongoDB to store user data (e.g., email, hashed password).
     - **Password Hashing**: Use **bcrypt** to hash and securely store passwords.
     - **Environment Variables**: Store sensitive information (e.g., JWT secret, database URI) using environment variables.
     - **API Endpoints**: Implement at least two protected routes (e.g., `/profile` to get user information) that require authentication.
     - **Middleware**: Use middleware for authentication, rate limiting, and logging.

   - **Skills:**
     - **JWT**: Learn how to authenticate users using tokens.
     - **Rate Limiting**: Protect APIs from abuse by limiting the number of requests.
     - **Logging**: Understand how to log critical information to improve debugging and monitoring.
     - **Database Integration**: Store user data in a database and retrieve it securely.
     - **Security Best Practices**: Use hashing and environment variables to manage sensitive data.

   - **Possible Extensions:**
     - Implement refresh tokens for JWT-based sessions.
     - Add role-based access control (RBAC) for admin and user roles.
     - Deploy the API using Docker or on a cloud platform (e.g., Heroku or AWS).

---
