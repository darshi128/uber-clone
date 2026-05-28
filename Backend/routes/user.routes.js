const express = require('express');
const  router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('fullName.firstName').isLength({min:3}).withMessage('first name must be atleast 3 char'),
    body('password').isLength({min:5}).withMessage('password must be atleast 5 char')
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('password').isLength({min:5}).withMessage('password must be atleast 5 char')
],userController.loginUser)

router.post('/profile',authMiddleware.authuser,userController.getUserProfile)
router.post('/logout',authMiddleware.authuser,userController.logoutUser);

module.exports = router;
