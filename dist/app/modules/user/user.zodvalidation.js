"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchema = void 0;
const zod_1 = require("zod");
// Define schemas for individual parts of the user object
const UsernameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
});
const UserAddressValidationSchema = zod_1.z.object({
    street: zod_1.z.string().min(1),
    city: zod_1.z.string().min(1),
    country: zod_1.z.string().min(1),
});
const UserHobbiesValidationSchema = zod_1.z.object({
    whatplay: zod_1.z.string().min(1),
    inLeisure: zod_1.z.string().min(1),
    anyRiding: zod_1.z.string().min(1),
});
const UserodersSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number().int().positive(),
    quantity: zod_1.z.number().int().positive(),
});
// Define the entire user schema by composing the individual schemas
exports.UserValidationSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    userName: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
    fullName: UsernameValidationSchema,
    age: zod_1.z.number().positive(),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean(),
    hobbies: UserHobbiesValidationSchema,
    address: UserAddressValidationSchema,
    imgUrl: zod_1.z.string().optional(),
    orders: zod_1.z.array(UserodersSchema),
    isDeleted: zod_1.z.boolean(),
});
exports.default = exports.UserValidationSchema;
