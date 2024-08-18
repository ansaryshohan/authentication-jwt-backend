const express= require("express");
const cors= require("cors");

const port = 8000;

const app= express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
  res.json({"message":"backend homepage"})
})

app.listen(port,()=>{
  console.log(`this app is running on http://localhost:${port}`)
})