import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async(user:TUser) => {           
   const result =  await UserModel.create(user);
   return result;
};

const getAllUserFromDb = async()=>{
  const result = await UserModel.find();
  return result;
}

const getSingleUserFromDb = async(id:string) =>{
    const result = await UserModel.find({id});
    return result;
}

export const UserServices ={
    createUserIntoDB,
    getAllUserFromDb,
    getSingleUserFromDb

}