import { Schema, model } from 'mongoose';
import { TUser, TUseraddress, TUserhobbies, TUsername } from './user.interface';

 const userNameSchema= new Schema<TUsername>({
    
        firstName: {
           type:String,
           required:true,
           trim:true,
           validate: {
            validator: function(value:string){
                const firstNamestr = value.charAt(0).toUpperCase()+value.slice(1);
                return firstNamestr === value ;
               },
               message:"{VALUE} is not right formate"
           }
        },
        lastName:{
           type:String,
           required:true,
           trim:true,
           validate: {
            validator: function(value:string){
                const firstNamestr = value.charAt(0).toUpperCase()+value.slice(1);
                return firstNamestr === value ;
               },
               message:"{VALUE} is not right formate"
           }
        }
 })  


 const userAddressSchemma = new Schema<TUseraddress>(
    {
        street:{type:String,trim:true},
        city:{type:String,trim:true},
        country:{type:String,trim:true}
    }
 )

 const userHobbiesSchema= new Schema<TUserhobbies>(
    {
        whatplay:{type:String,trim:true},
        inLeisure:{type:String,trim:true},
        anyRiding:{type:String,trim:true},
    }
 )


const userSchema = new Schema<TUser>({
    id:{type:Number, required:[true, "id need "] ,unique:true,trim:true},
    userName:{type:String , required:[true, "userNAme need"], unique:true,trim:true},
    password: {type:String, required:true},

    fullName: userNameSchema ,

    age:{type:Number, required:true,trim:true},
    email:{type:String, required:true,trim:true},

    isActive:{type:Boolean},

    hobbies: userHobbiesSchema,

    address: userAddressSchemma,

    imgUrl:{type:String,trim:true},

     orders: [
        {
          productName: { type: String, required: true ,trim:true},
          price: { type: Number, required: true ,trim:true},
          quantity: { type: Number, required: true,trim:true },
        },
      ],

})   ;

export const UserModel = model<TUser>('User', userSchema)

