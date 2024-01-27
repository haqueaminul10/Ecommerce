const db = require("../config/dbConnection.js");
const jwt = require("jsonwebtoken");

//REGISTER CONTROLLER
exports.Register = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      gender,
      contactnumber,
      password,
      role,
    } = req.body;
    if (
      !firstname ||
      !lastname ||
      !email ||
      !gender ||
      !contactnumber ||
      !password
    ) {
      res.status(400).send({ success: false, message: "All field required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid email format" });
    }
    const contactNumberRegex = /^\d{11}$/;
    if (!contactNumberRegex.test(contactnumber)) {
      return res.status(400).send({
        success: false,
        message: "Invalid contact number format. It must be 11 digits.",
      });
    }
    const ExistingData = `SELECT * FROM Register WHERE email=? OR contactnumber= ?`;
    db.query(ExistingData, [email, contactnumber], (err, results) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Database error",
        });
      } else if (results.length > 0) {
        return res
          .status(409)
          .send({ success: false, message: "Already registered" });
      } else {
        const registerField = {
          firstname,
          lastname,
          email,
          gender,
          contactnumber,
          password,
          role: role || "user",
        };
        const insertData = `INSERT INTO Register SET ? `;
        db.query(insertData, registerField, (err, results) => {
          if (err) {
            return res.status(500).send({
              success: false,
              message: "Database error",
            });
          } else {
            res.status(200).send({
              success: true,
              message: "Registation successfully",
              results,
            });
          }
        });
      }
    });
  } catch (err) {
    console.error(`Error:`, err);
    res.status(500).send({ success: false, message: "Registation failed" });
  }
};

//LOG IN CONTROLLER
exports.LogIn = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      res.status(400).send({
        success: false,
        message: "All field required",
      });
    }
    const existingEmail = `SELECT * FROM Register WHERE email=?`;
    db.query(existingEmail, [email], (err, results) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: "Database error",
        });
      } else if (results.length === 0) {
        return res.status(404).send({
          success: false,
          message: "Email not found",
        });
      } else {
        const user = results[0];
        if (user.password !== password) {
          return res.status(404).send({
            success: false,
            message: "Password not found",
          });
        } else {
          //TOKEN
          const token = jwt.sign(
            { useId: user.id, email: user.email, role: user.role },
            process.env.jwt_secret,
            { expiresIn: "1d" }
          );
          res.status(200).send({
            success: true,
            message: "LogIn successfully",
            role,
            token,
          });
        }
      }
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ success: false, message: "Login failed" });
  }
};

//TEST ROUTE
exports.testRoute = (req, res) => {
  res.send({ message: "Test Route" });
};
