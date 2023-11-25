"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNamestr === value;
            },
            message: "{VALUE} is not right formate"
        }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNamestr === value;
            },
            message: "{VALUE} is not right formate"
        }
    }
});
const userAddressSchemma = new mongoose_1.Schema({
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    country: { type: String, trim: true }
});
const userHobbiesSchema = new mongoose_1.Schema({
    whatplay: { type: String, trim: true },
    inLeisure: { type: String, trim: true },
    anyRiding: { type: String, trim: true },
});
const userSchema = new mongoose_1.Schema({
    id: { type: Number, required: [true, "id need "], unique: true, trim: true },
    userName: { type: String, required: [true, "userNAme need"], unique: true, trim: true },
    password: { type: String, required: true, maxlength: [15, "password can not more then 15 charecter"] },
    fullName: userNameSchema,
    age: { type: Number, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    isActive: { type: Boolean },
    hobbies: userHobbiesSchema,
    address: userAddressSchemma,
    imgUrl: { type: String, trim: true },
    orders: [
        {
            productName: { type: String, required: true, trim: true },
            price: { type: Number, required: true, trim: true },
            quantity: { type: Number, required: true, trim: true },
        },
    ],
    isDeleted: { type: Boolean, default: false }
});
//Doccument middleware
//  pre save middleware
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //hasing password then save in DB
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
//post save middleware
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
//Quary middleware
userSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
userSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
