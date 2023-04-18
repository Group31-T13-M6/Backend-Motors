import { Request, Response } from 'express';
import { IUserRegister } from '../interfaces/users';
import { registerUserService } from '../services/users/registerUser.service';
import { getUserService } from '../services/users/getUserById.service';
import { deleteUserService } from '../services/users/deleteUser.service';

const createUserController = async (req: Request, res: Response) => {
  const payload: IUserRegister = req.validatedBody;
  const data = await registerUserService(payload);
  return res.status(201).json(data);
};

const getUserByIdController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = await getUserService(userId);
  return res.status(200).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).json();
};

export { createUserController, getUserByIdController, deleteUserController };
