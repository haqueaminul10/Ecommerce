const slugify = require('slugify');
const db =require("../config/dbConnection.js");


//CREATE CATEGORY (ADMIN)
exports.crateCategory =async(req,res)=>{
    try{
        const {name}=req.body
    const slug=slugify(name,{lower:true})

    if(!name){
        return res.status(401).send({
            success:false,
            message:"Require category name"
        })
    }

    //QUERY
    const sql = `INSERT INTO categories(name,slug) VALUES (?,?)`
    db.query(sql,[name,slug],(err,results)=>{
        if(err){
            console.log(`Error:`,err.message);
        }
        res.status(200).send({
            success:true,
            message:"Category created success",
        })
    })
    }
    catch(err){
        console.error(err);
        res.status(501).send({
            success:false,
            message:"Error in category"
        })
    }
}

//UPDATE CATEGORY ADMIN
exports.updateCategory=async(req,res)=>{
    try{
        const {name}=req.body;
        const categoriesId =req.params.id;
        const slug =slugify(name,{lower:true})
        if(!name){
            return res.status(401).send({
                success:true,
                message:"Name is required"
            })
        }
        //QUERY
        const sql= `UPDATE categories SET name=? ,slug =? WHERE id=?`
        db.query(sql,[name,slug,categoriesId],(err,results)=>{
            if(err){
                console.log("error:",err.message)
            }
        })
        res.status(201).send({
            success:true,
            message:"Update category success"
        })

    }
    catch(err){
        console.error("Error:",err)
        res.status(502).send({
            success:false,
            message:"Error while updating category",
            err
        })
    }
}


//DELETE CATEGORY
exports.deleteCategory=async(req,res)=>{
    try{
        const categoriesId =req.params.id;
        //QUERY
        const sql= `DELETE FROM categories WHERE id=? `
        db.query(sql,[categoriesId],(err,results)=>{
            if(err){
                console.log("Error:",err.message)
            }
        })
        res.status(202).send({
            success:true,
            message:"Delete category success"
        })  

    }
    catch(err){
        console.error(err);
        res.status(500).send({
            success:false,
            message:"Error while delete category"
        })
    }
}