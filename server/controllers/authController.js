const db =require("../config/dbConnection.js");
const jwt = require('jsonwebtoken');

//REGISTER CONTROLLER
exports.Register=async(req,res)=>{
    
    try{
        const{
            firstname,
            lastname,
            email,
            contactnumber,
            password,
            role
        }=req.body;
        if(!firstname ||!lastname  || !email || !password ||!contactnumber){
            return res.status(501).send({
                success:false,
                message:"require all field"
            })
        }
        //QUERY
        const existingQuery=`SELECT * FROM Register WHERE email=? OR contactnumber= ?  `
        db.query(existingQuery,[email,contactnumber],(err,result)=>{
            if(err){
                console.log(err)
                res.status(503).send({
                    success:false,
                    message:"databse error"
                })
            }
            else if(result.length>0){
                res.status(401).send({
                    success:false,
                    message:"already registered"
                })
            }
            else{
                const registerData= {
                    firstname,
                    lastname,
                    email,
                    contactnumber,
                    password,
                    role: role || 'user'
                }
                const registerQuery=`INSERT INTO Register SET ?`
                db.query(registerQuery,registerData,(err,result)=>{
                    if(err){
                        console.error("reason:",err)
                        res.status(502).send({
                            success:false,
                            message:"database insert error"
                        })
                    }
                    else{
                        console.log("insertId:",result.id);
                        res.status(200).send({
                            success:true,
                             message:"registation success"
                        })
                    }
                })
            }
        })
    }
    catch(err){
        console.error("err",err)
        res.status(500).send({
            success:false,
            message:"registation error"
        })
    }
}


//LOGIN CONTROLLER
exports.login =async(req,res)=>{
    try{
        const {email,password,role}=req.body;
        if(!email || !password){
            return res.status(401).send({
                success:false,
                message:"require all fields"
            })
        }
        //EXISTING EMAIL
        const existingEmail =`SELECT * FROM Register WHERE email =? `
        db.query(existingEmail,[email],(err,result)=>{
            if(err){
                return res.status(500).send({
                    success:false,
                    message:"database error"
                })
            }
            else if (result.length ===0){
                res.status(401).send({
                    success:false,
                    message:"Email not found"
                })
            }

            else{
                const user= result[0];
                if(user.password !== password){
                    res.status(402).send({
                        success:false,
                        message:"password not found"
                    })
                }
                else{
                    //TOKEN
                    const token =jwt.sign(
                        {userId:user.id,email:user.email,role:user.role },
                        process.env.jwt_secret,
                        { expiresIn: '7d' }
                    )
                    res.status(200).send({
                        success:true,
                        message:"login success",
                        user,
                        token,
                        role
                    })
                    
                }
            }
            
        })
        
    }
    catch(err){
        console.error(err)
        res.status(400).send({
            success:false,
            message:"login error"
        })

    }
}


//TEST ROUTE
exports.testController= (req,res)=>{
    res.status(200).send({
        success:true,
        message:"protected route"
    })
}