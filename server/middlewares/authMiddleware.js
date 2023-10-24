const jwt = require('jsonwebtoken');

//PROTECTED ROUTE TOKEN BASED
exports.requireSignin = async(req,res,next)=>{
    try{
        const token =req.headers.authorization;
        if(!token){
            return res.status(401).send({message:"unauthorize"})
        }
        const decode = jwt.verify(
            token,
            process.env.jwt_secret
          );
          //console.log("decode",decode.role)
          req.user=decode;
        //console.log("req.user",req.user)
        next()

    }
    catch(err){
        console.error(err);
    }
}

//ADMIN ACCESS

exports.isAdmin = (role) => async (req, res, next) => {
    const user = req.user;
    //console.log('User role:', user.password);
    //console.log('Required role:', role);
    if (user.role === role) {
        next();
    } else {
        res.status(403).send({ message: "Forbidden" });
    }
}

