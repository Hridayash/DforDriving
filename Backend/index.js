//installing the packages 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


//setting up the app 
const app = express();
app.use(cors());
app.use(express.json());




app.get("/", (req,res)=>{
    res.send("hello world this is chnaged by anshu")
})

app.listen("3001", (req,res)=>{
    console.log("server is running on port 3000")
})

