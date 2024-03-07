import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"JOB_BOARD",
    
    })
    .then(()=>{
        console.log("Database connection Successful")
 
    })
    .catch((err)=>{
         console.log(`Some error occurred while connecting to database: ${err}`)
    })
}