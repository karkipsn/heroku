const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    console.log("Hello world");
});

app.listen(6162,()=>{
    console.log("App is runing");
});
