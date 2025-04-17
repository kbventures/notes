# Hello World API - Versions

## 1. Easy Version

### Objective:
Create a simple REST API that returns a JSON response with a welcome message.

### Requirements:
- Set up a basic server using a minimal backend framework like **Express**.
- Return a simple JSON object with a welcome message.

### Steps:
1. Initialize a Node.js project with `npm init` or `yarn init`.
2. Install **Express** using `npm install express` or `yarn add express`.
3. Create a basic **Express** server.
4. Set up a single route (`GET /`) to return a JSON response like `{"message": "Hello, World!"}`.
5. Test the API using Postman, curl, or the browser.

### Time Estimate: ~1 hour

---

## 2. Intermediate Version

### Objective:
Create a REST API that returns a welcome message along with a timestamp and status code. Additionally, include basic input validation.

### Requirements:
- Set up a Node.js backend using **Express**.
- Validate incoming requests (check if the request is valid).
- Return a JSON response with the welcome message, status code, and timestamp.

### Steps:
1. Initialize a Node.js project with `npm init` or `yarn init`.
2. Install **Express** and **Joi** (for validation) using `npm install express joi` or `yarn add express joi`.
3. Create a basic **Express** server.
4. Set up a route (`GET /`) to return a JSON response with:
   - A `message` field: `{"message": "Hello, World!"}`
   - A `status` field: `200`
   - A `timestamp` field: current server time (`new Date()`).
5. Validate the request to check if the API is working correctly using **Joi** or a similar validation library.
6. Handle errors gracefully (if any, like invalid request formats).
7. Test the API using Postman, curl, or the browser.

### Time Estimate: ~1 hour

---

## 3. Advanced Version

### Objective:
Create a Hello World API with a welcome message, status code, timestamp, and an API key for authentication. Also, include logging and error handling.

### Requirements:
- Set up a Node.js backend using **Express**.
- Implement authentication using an API key sent in the request headers.
- Return JSON with status code, timestamp, and message.
- Add logging to track requests.
- Error handling for invalid API keys.

### Steps:
1. Initialize a Node.js project with `npm init` or `yarn init`.
2. Install necessary libraries:
   - `express` for the server.
   - `morgan` for logging.
   - Use **dotenv** to store the API key (`npm install express morgan dotenv`).
3. Set up an **Express** server.
4. Create a route (`GET /`) to return:
   - A `message` field: `{"message": "Hello, World!"}`
   - A `status` field: `200`
   - A `timestamp` field: current time (`new Date()`).
5. Implement API key authentication:
   - Store the API key in a `.env` file.
   - Check if the correct API key is included in the request headers (`Authorization`).
6. Log incoming requests using **morgan**.
7. **Error handling**:
   - If the API key is missing or incorrect, return a `401 Unauthorized` error with a relevant message.
8. Test the API using Postman or curl, making sure to pass the correct API key.

### Time Estimate: ~1 hour

---

## Summary:

- **Easy**: Basic API using Express that returns a JSON with a message.
- **Intermediate**: Adds validation and additional fields (status, timestamp) with validation and error handling.
- **Advanced**: Adds API key authentication, logging, and more robust error handling.
