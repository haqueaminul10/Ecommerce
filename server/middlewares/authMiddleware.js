const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  //console.log(token);
  if (!token) {
    res.status(401).send({ success: false, message: "Access denied" });
  }
  const decode = jwt.verify(token, process.env.jwt_secret);
  //console.log(decode);
  req.user = decode;
  //console.log(req.user);
  next();
};

exports.isAdmin = (role) => async (req, res, next) => {
  //console.log(role);
  const user = req.user;
  //console.log(user);
  if (user.role === role) {
    next();
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
};
