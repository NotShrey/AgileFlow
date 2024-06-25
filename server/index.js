import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
// Morgan is another HTTP request logger middleware for Node. js. It simplifies the process of logging requests to your application. Using Morgan and Winston Together. Winston gives you a lot more flexibility with additional transports and also makes it easy to query your logs for analysis.
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";

dotenv.config();

dbConnection();

const PORT = process.env.PORT || 5000;

const app = express();

//Cross-Origin Resource Sharing
//is a security feature implemented in web browsers that allows or restricts web applications running at one origin (domain) from interacting with resources from a different origin.
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],// only accept connection from these url 
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api", routes);
//so it will work as http://localhost:3000/api then it will be redirected to the routes


//this url does not exists middleware
app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
