# Key Sections of the Node.js Documentation for HTTP Server Challenges

## 1. HTTP Module
**[Node.js HTTP Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)**

### Purpose:
This is the primary module you'll be using to create and manage HTTP servers.

### Topics Covered:
- Creating an HTTP server using `http.createServer()`.
- Handling incoming requests (`req` and `res` objects).
- Sending responses using `res.write()` and `res.end()`.
- Listening for requests with `server.listen()`.
- Understanding how to handle incoming request data (query strings, headers, request body).

### What to focus on:
- `http.createServer()`
- Request and response objects (`req`, `res`).
- `req.method`, `req.url`, `req.headers`, `req.body` (for understanding incoming request details).
- Sending responses (`res.write()`, `res.end()`).
- The `listen()` method to make the server listen on a specific port.

---

## 2. URL Module
**[Node.js URL Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/url.html)**

### Purpose:
The `url` module helps parse and format URLs, which is useful for handling incoming request URLs.

### What to focus on:
- `url.parse()` to parse request URLs.
- `url.format()` to format URLs for redirection or responses.

---

## 3. Querystring Module
**[Node.js Querystring Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/querystring.html)**

### Purpose:
To parse and stringify query strings from URLs.

### What to focus on:
- `querystring.parse()` and `querystring.stringify()`.
- Useful when working with GET parameters in the URL (e.g., `?id=123&name=John`).

---

## 4. Stream Module
**[Node.js Stream Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/stream.html)**

### Purpose:
Streams are crucial when handling large data (e.g., file uploads/downloads or piping data).

### What to focus on:
- The difference between readable and writable streams.
- Working with streams to process data, especially for file handling or handling large responses.

### Useful for:
- More advanced challenges involving file uploads, handling large responses, etc.

---

## 5. Buffer Module
**[Node.js Buffer Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html)**

### Purpose:
Buffers are used for handling binary data, which is often needed when working with HTTP request bodies or working with binary file uploads.

### What to focus on:
- `Buffer.from()`, `Buffer.toString()`, `Buffer.byteLength()`.
- When working with raw data, such as handling POST request bodies.

---

## 6. Path Module
**[Node.js Path Module Documentation](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)**

### Purpose:
Helps with working with file and directory paths, especially useful for serving static files.

### What to focus on:
- `path.join()`, `path.resolve()` to correctly manage file paths.
- Useful for building paths when serving static assets or reading files from the file system.
