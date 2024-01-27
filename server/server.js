//require express
const express = require(`express`);
const app = express();
app.use(express.json());

//body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require cors
const cors = require("cors");
app.use(cors());

//require dotenv
const dotenv = require("dotenv").config();

//DB CONNECTION
const db = require("./config/dbConnection.js");
//AUTH MODEL
const authModel = require("./models/authModel.js");
/////////   REST API ////////

//HOME ROUTE
app.get("/", (req, res) => {
  res.status(200).send({
    message: "home route",
  });
});
//AUTH ROUTE
const authRoute = require("./routes/authRoute.js");
app.use("/api/auth", authRoute);

//PORT
const PORT = process.env.PORT || 9000;

//SERVER LISTEN
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
