const bcrypt = require('bcrypt');
const db= require('../config/dbConnection');
const jwt = require('jsonwebtoken');

//REGISTER CONTROLLER
exports.Register=async(req,res)=>{
    const {firstname,lastname,email,contactnumber,password,role}=req.body;

    if(!firstname || !lastname || !email || !contactnumber || !password){
        return res.status(400).send({message:"Require all field"})
    }

    //HASH PASSWORD
    const saltRound = 10;
    bcrypt.hash(password,saltRound,(err,hashPassword)=>{
        if(err){
            console.error("Eroor:",err);
            res.status(400).send({
                message: 'Registration failed'
            })
        }
        else{
            const registerData={
                firstname,
                lastname,
                email,
                password:hashPassword,
                contactnumber,
                role: role || 'user'
            };

            //QUERY
            const query= `INSERT INTO register SET ?`;
            db.query(query,registerData,(err,result)=>{
                if(err){
                    console.error("Error:",err)
                    res.status(500).send({
                        success: false,
                        message:"Error Registation"
                    })
                }
                else{
                    res.status(200).send({
                        success: true,
                        message:"Registation successfull"
                    })
                }
            })


        }
    })  
}

//LOGIN CONTROLLER

exports.login=async(req,res)=>{
    const {email,password}=req.body;

    //QUERY
    const query =`SELECT * FROM register WHERE email =?`
    db.query(query,[email],(err,result)=>{
        if(err){
            console.error("Error:",err)
            res.status(500).send({message:"Login faild"})
        }
        else if(result.length ==0){
            res.status(400).send({message:"Invaild Email and Password"})
        }
        else{
            const user=result[0];
            //COMPARE PASSWORD
            bcrypt.compare(password,user.password,(err,matchPassword)=>{
                if(err){
                    console.error(err);
                    res.status(400).send({message:"Login faild"})
                }
                else if(matchPassword){
                    const token = jwt.sign({userId:user.id,role:user.role},process.env.jwt_key,{expiresIn:"3d"})
                    res.status(201).send(
                        {message:"Login succssfully",id:user.id,token})
                     
                }
                
                else{
                    res.status(500).send(
                        {message:"Invalid email & password"}
                        )
                }
            })
        }
    })

}

//PROTECTED ROUTE
exports.protectedRoute =(req,res)=>{
    
    res.status(200).send({message:"protected route"})
}