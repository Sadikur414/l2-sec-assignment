import { Schema, model, connect } from 'mongoose';


export type TUsername={
    firstName:string;
    lastname:string
                      }

                
  export type TUserhobbies = {
      whatplay: string;
      inLeisure: string;
      anyRiding: string;
            };                       


   export type TUseraddress = {
    streeT:string,
    city:string,
    country:string
                             }


   export type TUseroders = [
    {productName:string},
    {price:number},
    {quantity:number}
   ]                          


export type TUser = {
   id:string,

   userName:string,
   password:string,

   fullName:TUsername,
   age:number,
   email:string,
   isActive:true|false,
   
   hobbies: TUserhobbies,

   address: TUseraddress,
  
   orders: TUseroders

}