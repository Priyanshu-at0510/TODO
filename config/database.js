const mongoose=require("mongoose");

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    })
    .then(()=>console.log("DB ka connection is successful"))
    .catch((error)=>{
        console.log("error in DB connnection");
        console.error(error.message);
        process.exit(1);

    });
}

module.exports= dbConnect;
