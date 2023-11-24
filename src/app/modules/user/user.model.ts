import { Schema, model, connect } from 'mongoose';
import { TUser, TUseraddress, TUserhobbies, TUsername } from './user.interface';

 const userNameSchema= new Schema<TUsername>({
    
        firstName: {
           type:String,
           required:true
        },
        lastName:{
           type:String,
           required:true
        }
 })  

 const userAddressSchemma = new Schema<TUseraddress>(
    {
        street:{type:String},
        city:{type:String},
        country:{type:String}
    }
 )

 const userHobbiesSchema= new Schema<TUserhobbies>(
    {
        whatplay:{type:String},
        inLeisure:{type:String},
        anyRiding:{type:String},
    }
 )


const userSchema = new Schema<TUser>({
    id:{type:String , required:true },
    userName:{type:String , required:true},
    password: {type:String, required:true},

    fullName: userNameSchema ,

    age:{type:Number, required:true},
    email:{type:String, required:true},

    isActive:{type:Boolean},

    hobbies: userHobbiesSchema,

    address: userAddressSchemma,

    imgUrl:{type:String},

    orders:[
        {
            productName:{type:String},
            price:{type:Number},
            quantity:{type:Number}

        }
    ]

})   ;

export const UserModel = model<TUser>('User', userSchema)

