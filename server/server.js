const express=require('express')
const app=express();

app.get("/", (req,res)=>{
    res.send("unauthorize access is not allowed")
})

app.listen(3000, ()=>{
    console.log("Runing in port 3000")
})