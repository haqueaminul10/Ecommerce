const express =require(`express`)

//ROUTER
const router=express.Router();

//  REGISTATION || POST METHOD
const authController=require("../controllers/authController.js");
const authMiddleware=require("../middlewares/authMiddleware.js");
router.post("/register",authController.Register)

// LOGIN || POST METHOD
router.post("/login",authController.login)

//TEST ROUTE
router.get("/test",
authMiddleware.requireSignin,authMiddleware.isAdmin('admin'),
authController.testController
)

//PROTECTED USER ROUTE
router.get("/user-auth",authMiddleware.requireSignin,(req,res)=>{
    res.status(200).send({ ok:true})
})

//PROTECTED ADMIN ROUTE
router.get("/admin-auth",authMiddleware.requireSignin, authMiddleware.isAdmin,(req,res)=>{
    res.status(200).send({ ok:true})
})

module.exports =router;












