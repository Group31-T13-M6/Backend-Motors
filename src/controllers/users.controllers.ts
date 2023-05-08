import { Request, Response } from "express";
import { IUserRegister } from "../interfaces/users";
import { registerUserService } from "../services/users/registerUser.service";
import { getUserService } from "../services/users/getUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";

const getUserController = async (req: Request, res: Response) => {
  const userId = req.validateAuth.sub;
  const data = await getUserService(userId);
  return res.status(200).json(data);
};

const getUserPerIdController = async (req: Request, res: Response) => {
  return res.status(200).json(req.validateAuth);
};

const createUserController = async (req: Request, res: Response) => {
  const payload: IUserRegister = req.validatedBody;
  const data = await registerUserService(payload);
  return res.status(201).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).json({});
};

const updateUserController = async (req: Request, res: Response) => {
  const { validatedBody, params } = req;
  const data = await updateUserService(params.id, validatedBody);
  return res.status(204).json(data);
};

export {
  createUserController,
  getUserController,
  getUserPerIdController,
  deleteUserController,
  updateUserController,
};
