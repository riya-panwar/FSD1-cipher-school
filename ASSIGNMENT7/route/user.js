const express = require('express');

const userControllers = require('../controllersblog/usercont');

const router = express.Router();


router.post("/signup" , userControllers.userSignup);
router.post("/login" , userControllers.userLogin);
router.get("/getUser", userControllers.userInfo);
router.post("/postBlog", userControllers.userPosts);
router.get("/getBlog" , userControllers.userGetBlog);

module.exports = router;