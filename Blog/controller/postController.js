const cloudinary = require("../config/cloudinary");
const Post = require("../model/postModel");
const User = require("../model/userModel");

const postBlogController = async (req, res) => {
    try {
        const { id, email } = req.user;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Unauthorized user'
            });
        }
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({
                status: 'error',
                message: 'Content is required'
            });
        }

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path).catch(flyerErr => {
                console.error('Error uploading flyer:', flyerErr);
                return res.status(500).json({ error: 'Error uploading flyer', success: false, errLog: flyerErr });
            });
            // blogData.image = result.secure_url;
            const createPost = new Post({
                content,
                image: result.secure_url,
                author: user
            });

            await createPost.save();

            res.status(201).json({
                status:'success',
                message: 'Blog posted successfully',
                post: createPost
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
        status: 'error',
        message: error.message || "server error"
        });
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Post.find();
        res.status(200).json({
            status:'successful',
            blogs: allBlogs
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        status: 'error',
        message: error.message || "server error"
        });
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const blogExists = await Post.findOne({ _id: id });
        if (!blogExists) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }
        const updatedBlog = await Post.findByIdAndUpdate(id, { content });
        res.status(200).json({
            status:'successful',
            message: 'Blog updated successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        status: 'error',
        message: error.message || "server error"
        });
    }
}


const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blogExists = await Post.findOne({ _id: id });
        if (!blogExists) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }
        res.status(200).json({
            status:'successful',
            data: blogExists,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        status: 'error',
        message: error.message || "server error"
        });
    }
}

const likeBlog = async (req, res) => {
    try {
        const { id } = req.params; 
        const { email } = req.user;

        // Find the user based on email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Unauthorized user'
            });
        }

        // Check if the blog post exists
        const blogExists = await Post.findById(id);
        if (!blogExists) {
            return res.status(404).json({
                status: 'error',
                message: 'Blog not found'
            });
        }

        // Check if the user has already liked the post
        const alreadyLiked = blogExists.like.includes(user._id);

        if (alreadyLiked) {
            // If the user has already liked, remove the like
            await Post.findByIdAndUpdate(id, {
                $pull: { like: user._id }
            });
            return res.status(200).json({
                status: 'success',
                message: 'Post unliked successfully'
            });
        } else {
            // If the user has not liked, add the like
            await Post.findByIdAndUpdate(id, {
                $push: { like: user._id }
            });
            return res.status(200).json({
                status: 'success',
                message: 'Post liked successfully'
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: error.message || "server error"
        });
    }
}


module.exports = {
    postBlogController,
    getAllBlogs,
    updateBlog,
    likeBlog,
    getBlogById
}