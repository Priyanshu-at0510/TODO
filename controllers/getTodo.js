//import the model
const Todo=require('../models/Todo');

//define the route handler

exports.getTodo=async(req,res)=>{
    try {
        //fetch all Todo items from database
        const todos=await Todo.find({});
        //response update kar denge
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"entire Todo data is fetched"
            }
        );

    } catch (err) {
       console.error(err);
       console.log(err);
       res.status(500).json(
        {
            success:false,
            error:err.message,
            message:"server error"
        }
       )
    }
}

exports.getTodoById=async(req,res)=>{
    try {
        //extract Todo Items based on Id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with this ID"
            })
        }
        //data for given ID is found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    } catch (error) {
       console.error(err);
       console.log(err);
       res.status(500).json(
        {
            success:false,
            error:err.message,
            message:"server error"
        }
       )
    }
}