// cors.js
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// Allow a specific address to access the server (replace with the actual addresses)
const allowedOrigin = [`${process.env.allowedOrigin}`];
console.log(process.env.allowedOrigin);
/**
 * Configuration options for CORS (Cross-Origin Resource Sharing).
 * @typedef {Object} CorsOptions
 * @property {string} origin - The allowed origin for CORS requests.
 * @property {string} methods - The allowed HTTP methods for CORS requests.
 * @property {boolean} credentials - Whether to allow cookies and authentication headers in CORS requests.
 */
const corsOptions = {
  origin: allowedOrigin,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and authentication headers
};

export default cors(corsOptions);
