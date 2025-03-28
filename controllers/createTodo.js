//import the model 
// so that we know the schema of Todo 

const Todo=require("../models/Todo");

//define the route handler

exports.createTodo=async(req,res)=>{
    try {
        //extract title and description from request body
        const {title,description}=req.body;
        //create a new Todo object and insert it into DB
        const response=await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created successfully'
            }
        )
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server errro",
            message:error.message,
        })
    }
}