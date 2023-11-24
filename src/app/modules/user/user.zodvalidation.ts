import { z } from 'zod';

// Define schemas for individual parts of the user object
const UsernameValidationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

const UserAddressValidationSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

const UserHobbiesValidationSchema = z.object({
  whatplay: z.string().min(1),
  inLeisure: z.string().min(1),
  anyRiding: z.string().min(1),
});

const UserodersSchema = z.object({
    productName: z.string(),
    price: z.number().int().positive(),
    quantity: z.number().int().positive(),
  });

// Define the entire user schema by composing the individual schemas
export const UserValidationSchema = z.object({
  id: z.number().int().positive(),
  userName: z.string().min(1),
  password: z.string().min(1),
  fullName: UsernameValidationSchema,
  age: z.number().positive(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: UserHobbiesValidationSchema,
  address: UserAddressValidationSchema,
  imgUrl: z.string().optional(),
orders: z.array(UserodersSchema),
});


export default UserValidationSchema;