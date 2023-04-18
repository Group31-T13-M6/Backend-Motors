import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const isValidImageIdMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const isImage = await prismaClient.image.findUnique({
        where: {
            id,
        },
        include: {
            announcement: {
                select: {
                    userId: true,
                },
            },
        },
    });

    if (!isImage) {
        throw new AppError("Params 'id' is not valid uuid image.", 401);
    }

    req.validatedImage = isImage;
    return next();
};

export { isValidImageIdMiddleware };
