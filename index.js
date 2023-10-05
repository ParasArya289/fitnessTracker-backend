require("./mongodb")
const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(helmet());

app.get("/",(req,res)=>{
  res.send("Fitness tracker backend")
})

//Global error handler
app.use((err,req,res,next)=>{
  res.status(500).json({error:"Something went wrong!"})
})

//Global route handler
app.use((req,res)=>{
  res.status(404).json({error:"Requested API endpoint does not exist!"})
})

app.listen(3000,()=>{
  console.log("Server started")
})