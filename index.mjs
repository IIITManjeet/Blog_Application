import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.mjs";
import router from "./routes/user-routes.mjs";
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect("mongodb+srv://ManjeetDB:GoBEJ56RzI7qQZv3@cluster0.8jxroxp.mongodb.net/?retryWrites=true&w=majority").then(()=>app.listen(5000)).then(()=>console.log("Connected to Database Successfully and listening to port 5000")).catch((err)=>console.log(err));