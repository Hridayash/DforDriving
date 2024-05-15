//installing the packages 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


//setting up the app 
const app = express();
app.use(cors());
app.use(express.json());




app.get("/", (req,res)=>{
    res.send("hello world we gonna rock it")
})

app.listen("3000", (req,res)=>{
    console.log("server is running on port 3000")
})


