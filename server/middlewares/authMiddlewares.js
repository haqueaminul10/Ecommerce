const jwt = require('jsonwebtoken');

// AUTHENTICATE TOKEN BASED
exports.authenticateToken=async(req,res,next)=>{
    try{
        const token =req.headers.authorization;
        if(!token){
            return res.status(401).send({message:"unauthorize"})
        }
        const decode = jwt.verify(
            token,
            process.env.jwt_key
          );
          req.user = decode;
          console.log(req.user)
          next();
    }
    catch(err){
        console.log(err);
    }
}

//ADMIN ACCESS

exports.isAdmin =(role) =>async(req,res,next)=>{
    const user =req.user;
    if(user.role == role){
        next();
    }
    else{
        res.status(402).send({message:"forbidden"})
    }
}