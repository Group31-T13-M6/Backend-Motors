import * as yup from "yup";
import { createAddressSchema } from "./address";

const createUserSchema = yup.object().shape({
  name: yup.string().required().max(50),
  email: yup.string().email().required().max(50),
  cpf: yup.string().required(),
  phone_number: yup.string().required(),
  date_birth: yup.date().required(),
  description: yup.string().required().max(320),
  type_user: yup.string().oneOf(["Advertiser", "Buyer"]).required(),
  password: yup.string().min(6).required(),
  address: createAddressSchema.required(),
});

const updateUserSchema = yup.object().shape({
  name: yup.string().max(50),
  email: yup.string().email().max(50),
  cpf: yup.string(),
  phone_number: yup.string(),
  date_birth: yup.date(),
  description: yup.string().max(320),
  type_user: yup.string().oneOf(["Advertiser", "Buyer"]),
});

export { createUserSchema, updateUserSchema };
