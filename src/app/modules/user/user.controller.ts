import { Request, Response } from "express";
import { UserServices } from "./user.service";
import UserValidationSchema from "./user.zodvalidation";


const createUser = async (req:Request,res:Response)=> {
    
    const {user:userData }= req.body;
   try{
      
    //creating a schema validation using zod
     const zodParseData = UserValidationSchema.parse(userData);
    const result=  await UserServices.createUserIntoDB(zodParseData); 
    res.status(200).json({
        success:true,
        massage:"User is created successfully",
        data:result
    });
   }

   catch(err){
    res.status(500).json({
        success:false,
        massage:"Something went wrong",
        error:err
    })
   }
  
};



const getAllUsers = async(req:Request,res:Response) => {
    try{
      const result = await UserServices.getAllUserFromDb();
      res.status(200).json({
        success:true,
        massage:"User is Retriev successfully",
        data:result
    });
    }
    catch(err){
        res.status(500).json({
            success:false,
            massage:"data can not found",
            error: {
                code:404,
                description:"data have not found",
            }
        })
    }
}


const getSingleUser = async(req:Request,res:Response) => {
    try{
        const {userId} = req.params;
      const result = await UserServices.getSingleUserFromDb(userId);
      res.status(200).json({
        success:true,
        massage:"User is Retriev successfully",
        data:result
    });
    }
    catch(err){
        res.status(500).json({
            success:false,
            massage:"data can not found",
            error: {
                code:404,
                description:"data have not found",
            }
        })
    }
}



export const UserController ={
    createUser,
    getAllUsers,
    getSingleUser


}