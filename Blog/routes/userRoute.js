const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controller/userController.js');
const authentication = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.use(authentication);
router.get("/profile", getUserProfile);



module.exports = router;
