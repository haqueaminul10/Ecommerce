const express = require(`express`);

//ROUTER
const router = express.Router();

//REGISTER || POST METHOD
const authController = require("../controllers/authController.js");
router.post("/register", authController.Register);

//LOG IN || POST METHOD
const authMiddleware = require("../middlewares/authMiddleware.js");
router.post("/login", authMiddleware.verifyToken, authController.LogIn);

//TEST ROUTE || GET METHOD
router.get(
  "/test",
  authMiddleware.verifyToken,
  authMiddleware.isAdmin("admin"),
  authController.testRoute
);

//PROTECTED ROUTE
router.get("/user-auth", authMiddleware.verifyToken, (req, res) => {
  res.status(200).send({ ok: true });
});

//PROTECTED ADMIN ROUTE
router.get(
  "/admin-auth",
  authMiddleware.verifyToken,
  authMiddleware.isAdmin("admin"),
  (req, res) => {
    res.status(200).send({ ok: true });
  }
);

module.exports = router;
