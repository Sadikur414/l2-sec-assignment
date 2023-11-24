import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req:Request,res:Response)=> {
    
    const {user:userData }= req.body;
   
   try{
    const result=  await UserServices.createUserIntoDB(userData); 
    res.status(200).json({
        success:true,
        massage:"User is created successfully",
        data:result
    });
   }


   catch(err){
    console.log(err)
   }
  
};

export const UserController ={
    createUser,

}