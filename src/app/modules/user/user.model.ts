import { Schema, model, connect } from 'mongoose';
import { TUser, TUseroders } from './user.interface';




const userSchema = new Schema<TUser>({
    id:{type:String , required:true },
    userName:{type:String , required:true},
    password: {type:String, required:true},

    fullName: {
         firstName: {
            type:String,
            required:true
         },
         lastName:{
            type:String,
            required:true
         }
    } ,

    age:{type:Number, required:true},
    email:{type:String, required:true},

    isActive:{type:Boolean},

    hobbies: {
        whatplay:{type:String},
        inLeisure:{type:String},
        anyRiding:{type:String},
    },

    address: {
        street:{type:String},
        city:{type:String},
        country:{type:String}
    },

    imgUrl:{type:String},

    orders:[
        {
            productName:{type:String},
            price:{type:Number},
            quantity:{type:Number}

        }
    ]



})