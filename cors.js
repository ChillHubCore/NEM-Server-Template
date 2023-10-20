// cors.js
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// Allow a specific address to access the server (replace with the actual addresses)
const allowedOrigin = [`${process.env.allowedOrigin}`];
console.log(process.env.allowedOrigin);
const corsOptions = {
  origin: allowedOrigin,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and authentication headers
};

export default cors(corsOptions);
