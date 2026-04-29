const express = require('express')

//assigning all required data from express to local variable 
const app = express();

//defining port 
const port = 3000;

//printing hello world 
app.get('/hello',(req,res)=>{
    let time = new Date();
    res.json({
        message : "Hello world",
        actual_time : time
    })
    
})

app.listen(port,()=>{
    console.log(`app working on 3000 port`);
})