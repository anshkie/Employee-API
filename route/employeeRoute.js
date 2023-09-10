const express=require("express")
const employee = require("../model/employee")
const { deleteAccount, updateAccount, createAccount, startAccount } = require("../config/employeeCtrl")
const employeeRoute=express.Router()

employeeRoute.delete("/delete/:id",deleteAccount)
employeeRoute.put("/update/:id",updateAccount)
employeeRoute.post("/",createAccount)
employeeRoute.get("/",startAccount)

module.exports=employeeRoute;