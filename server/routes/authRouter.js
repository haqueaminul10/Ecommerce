const express =require(`express`)

//ROUTER
const router=express.Router();

//REGISTATION || POST METHOD
const authController= require("../controllers/authControl")
router.post("/register",authController.Register);

//LOGIN || POST METHOD
router.post("/login",authController.login);

//PROTECTED ROUTE
const authMiddleware =require("../middlewares/authMiddlewares.js");
router.get("/test",
authMiddleware.authenticateToken,
authMiddleware.isAdmin("admin"),
authController.protectedRoute);
module.exports =router;