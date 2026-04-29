const express=require("express")
const app=express()
const port=3000

app.use((req,res,next)=>{
    console.log("middleware executed");
    next();
})

app.get("/home",(req,res)=>{
    res.send("Welcome to Home");
})
app.get("/about",(req,res)=>{
    res.send("Welcome to About");
})
app.get("/login",(req,res)=>{
    res.send("Welcome to Login");
})
app.get("/register",(req,res)=>{
    res.send("Welcome to Register");
})

app.listen(port,()=>{
console.log(`listening port ${port}`);

})