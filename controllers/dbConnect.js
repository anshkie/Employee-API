const mongoose=require("mongoose")
const dbConnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://anshnew41:cZSlgGRVkQNXFt2U@cluster0.eqvaao2.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected")
    }
    catch(error)
    {
        console.log(error)
    }
}
dbConnect();