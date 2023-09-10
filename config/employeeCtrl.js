const express=require("express")
const employee = require("../model/employee")

const deleteAccount=async(req,res)=>{
    try{
       const deleteEmp=await employee.findByIdAndDelete(req.params.id)
        res.json({message:"deleted account"})
    }
    catch(error){
        console.log(error)
    }
}
const updateAccount=async(req,res)=>{
    try{
        const updateEmp=await employee.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            city:req.body.city,
            isMarried:req.body.isMarried,
            salary:req.body.salary
        },{
            new:true,
            runValidaters:true
        })
        res.json({message:"create account",
    data:updateEmp})
    }
    catch(error){
        console.log(error)
    }
}
const createAccount=async(req,res)=>{
    const {name,city,isMarried,salary}=req.body;
    try{
        const Employee=await employee.create({
            name,
            city,
            isMarried,
            salary
        })
        res.json({message:"create account",
                    data:Employee
    })
    }
    catch(error){
        console.log(error)
    }
}
const startAccount=async(req,res)=>{
    const Employee=await employee.find()
    try{
        res.json({message:"create account",
    data:Employee})
    }
    catch(error){
        console.log(error)
    }
}
module.exports={deleteAccount,updateAccount,createAccount,startAccount}