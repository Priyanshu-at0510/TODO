//import model
const Todo=require("../models/Todo");


exports.deleteTodo=async(req,res)=>{
  try {
    //find the id
    const {id}=req.params;
    await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
    res.status(200).json(
        {
            success:true,
            message:"Todo deleted successfully"
        }
    )
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