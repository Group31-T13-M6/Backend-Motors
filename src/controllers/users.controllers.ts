import { Request, Response } from "express";
import { IUserRegister } from "../interfaces/users";
import { registerUserService } from "../services/users/registerUser.service";
import { getUserService } from "../services/users/getUser.service";

const getUserController = async (req: Request, res: Response) => {
  const userId = req.validateAuth.sub;
  const data = await getUserService(req.validateAuth.sub);
  return res.status(200).json(data);
};

const createUserController = async (req: Request, res: Response) => {
  const payload: IUserRegister = req.validatedBody;
  const data = await registerUserService(payload);
  return res.status(201).json(data);
};

export { createUserController, getUserController };
