const express=require("express");
const router=express.Router();

//import controller
const {createTodo}=require('../controllers/createTodo');

//define API_Routes
router.post("/createTodo",createTodo);

module.exports=router;




