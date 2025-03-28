const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;


//middleware to parse json request body
app.use(express.json());

//import routes for TODO api
const todoRoutes=require('./routes/todos');

app.use("/api/v1",todoRoutes);



//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get('/',(req,res)=>{
    res.send(`<h1> this is HomePage Baby </h1>`);
})

//start the server now
app.listen(PORT,()=>{
    console.log("server started successfully");
});


