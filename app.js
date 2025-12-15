const express=require("express");
const rateLimit=require("express-rate-limit");
const app=express();
app.set("trust proxy",1);
const limiter=rateLimit({
    windowMs:60*1000,
    max:5,
    message:{
        error:"Too many requests.please try again later."
    }
});
app.use(limiter);
app.get("/api/data",(req,res)=>{
    res.json({message:"API response success"});
});
app.listen(3000,()=>{
    console.log("API rate limiting gateway running on port 3000");
    
})