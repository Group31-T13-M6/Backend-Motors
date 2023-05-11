import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";

const validateAuthUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authToken = req.headers.authorization;
  
  if (!authToken) {
    throw new AppError("Missing authorization headers", 401);
  }
  
  const token = authToken.split(" ")[1];
  
  return jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    
    req.validateAuth = decoded;
    return next();
  });
};

export { validateAuthUserMiddleware };
