//require express
const express =require(`express`);
const app =express();
app.use(express.json());

//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//require morgan
const morgan = require('morgan');
app.use(morgan('dev'));

//require cors
const cors = require('cors')
app.use(cors())

//require dotenv
const dotenv =require('dotenv').config()
//DB CONNECTION
const db= require("./config/dbConnection.js");
const register =require("./models/authRegister.js");

/////////   REST API ////////

//HOME ROUTE
app.get('/',(req,res)=>{
    res.status(200).send({
        message:"home route"
    })
})

//AUTH ROUTER
const authRoute= require("./routes/authRouter.js");
app.use("/api/auth",authRoute)

//PORT
const PORT= process.env.PORT || 9000;

//server listen
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});