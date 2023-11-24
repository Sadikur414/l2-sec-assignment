import { Schema, model, connect } from 'mongoose';


export type TUsername={
    firstName:string;
    lastName:string
                      }

                
  export type TUserhobbies = {
      whatplay: string;
      inLeisure: string;
      anyRiding: string;
            };                       


   export type TUseraddress = {
    street:string,
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
   
   imgUrl?: string,

   orders: TUseroders,


}