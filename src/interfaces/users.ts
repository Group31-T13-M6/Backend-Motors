import { TypeUser } from "@prisma/client";
import { IAddress, IAddressRegister } from "./address";

interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  date_birth: string;
  description: string;
  type_user: TypeUser;
  password: string;
  address?: IAddressRegister;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  date_birth: string;
  description: string;
  type_user: string;
  address?: IAddress;
}

interface IUpdateUser {
  name?: string;
  email?: string;
  cpf?: string;
  phone_number?: string;
  date_birth?: string;
  description?: string;
  type_user?: TypeUser;
}

interface IUserLogin {
  email: string;
  password: string;
}

export { IUserRegister, IUser, IUserLogin, IUpdateUser };
