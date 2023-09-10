const express=require("express")
const employeeRoute = require("./route/employeeRoute")
const app=express()

app.use(express.json())
app.use("/employee",employeeRoute)
require('./controllers/dbConnect')
/*app.post("/employee",async(req,res)=>{
    try{
        res.json({message:"create account"})
    }
    catch(error){
        console.log(error)
    }
})
app.get("/employee",async(req,res)=>{
    try{
        res.json({message:"create account"})
    }
    catch(error){
        console.log(error)
    }
})

app.put("/employee/update/:id",async(req,res)=>{
    try{
        res.json({message:"update account"})
    }
    catch(error){
        console.log(error)
    }
})
app.delete("/employee/delete/:id",async(req,res)=>{
    try{
        res.json({message:"delete account"})
    }
    catch(error){
        console.log(error)
    }
})
app.post("/employee/register",async(req,res)=>{
    try{
        res.json({message:"registration done"})
    }
    catch(error){
        console.log(error)
    }
})
app.post("/employee/login",async(req,res)=>{
    try{
        res.json({message:"login done"})
    }
    catch(error){
        console.log(error)
    }
})
*/

const PORT =9000
app.listen(PORT,()=>{
    console.log("server is running")
})