//import the model
const Todo=require("../models/Todo");

//define the route handler

exports.updateTodo=async(req,res)=>{
    try {
        //const id=req.params.id;
        const {id}=req.params;
        const {title,description}=req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        );
            // Check if the todo item exists
            if (!todo) {
                return res.status(404).json({
                    success: false,
                    message: "Todo not found",
                });
            }
            res.status(200).json({
                success:true,
                data:todo,
                message:`updated successfully`
            });

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
