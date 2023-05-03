import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const validateIsUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  if (!id) {
    throw new AppError("User id is required");
  }

  const user = await prismaClient.user.findUnique({
    where: { id },
    include: {
      announcements: true,
      address: true,
    },
  });
  
  if (!user) {
    throw new AppError("User not found", 404);
  }
  
  delete user.address.userId;
  delete user.password;
  req.validateAuth = user;
  return next();
};

export { validateIsUserMiddleware };
