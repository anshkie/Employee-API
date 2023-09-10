const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        isMarried:{
            type:Boolean,
            required:false
        },
        salary:{
            type:Number,
            required:true
        }
    }
)
const employee=mongoose.model("employee",schema)
module.exports=employee;