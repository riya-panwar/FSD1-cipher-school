const express = require('express');
const adminControllers = require('../controllersblog/admincont');

const router = express.Router();


router.post("/signup" , adminControllers.adminSignup);
router.post("/login" , adminControllers.adminLogin);

module.exports = router;