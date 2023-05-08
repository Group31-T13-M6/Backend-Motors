import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const validateEmailMiddlewares = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email } = req.validatedBody;

    const isUser = await prismaClient.user.findUnique({
        where: {
            email,
        },
    });

    if (isUser) {
        throw new AppError("Email already exists.", 409);
    }

    return next();
};

export { validateEmailMiddlewares };
