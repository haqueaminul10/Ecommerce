const express =require(`express`)

//ROUTER
const router=express.Router();


//CREATE CATEGORY API (ADMIN)
const categoryRoute =require("../controllers/categoryController.js")
const authMiddleware =require("../middlewares/authMiddleware.js");
router.post("/create-category",authMiddleware.requireSignin,authMiddleware.isAdmin('admin'),
categoryRoute.crateCategory);

//UPDATE CATEGORY API (ADMIN)
router.put("/update-category/:id",authMiddleware.requireSignin,authMiddleware.isAdmin('admin'),
categoryRoute.updateCategory);

//DELETE CATEGOTY API (ADMIN)
router.delete("/delete-category/:id",authMiddleware.requireSignin,authMiddleware.isAdmin('admin'),
categoryRoute.deleteCategory);



module.exports =router;