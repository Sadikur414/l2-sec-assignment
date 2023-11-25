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


   export type TUseroders = 
   {
      productName:string,
      price:number,
      quantity:number
   }
                             


export type TUser = {
   id:number,

   userName:string,
   password:string,

   fullName:TUsername,
   age:number,
   email:string,
   isActive:boolean,
   
   hobbies: TUserhobbies,

   address: TUseraddress,
   
   imgUrl?: string,
   isDeleted:boolean,

   orders: TUseroders[],


}