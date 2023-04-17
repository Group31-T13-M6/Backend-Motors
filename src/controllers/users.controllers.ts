import { Request, Response } from "express";
import { IUserRegister } from "../interfaces/users";
import { registerUserService } from "../services/users/registerUser.service";

const createUserController = async (req: Request, res: Response) => {
    const payload: IUserRegister = req.validatedBody;
    const data = await registerUserService(payload);
    return res.status(201).json(data);
};

export { createUserController };
