import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updatBlog } from '../controllers/blog-controller.mjs';

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updatBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get('/user/:id',getByUserId)

export default blogRouter;