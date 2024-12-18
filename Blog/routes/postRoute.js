const express = require("express");
const {
  postBlogController,
  getBlogById,
  getAllBlogs,
  updateBlog,
  likeBlog,
} = require("../controller/postController");
const authentication = require("../middleware/authMiddleware");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //     cb(null, 'uploads/');
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// router.use(authentication);
router
  .route("/blog")
  .post(upload.single("file"), postBlogController)
  .get(getAllBlogs);
router.route("/blog/:id").put(updateBlog).patch(likeBlog).get(getBlogById);

module.exports = router;
