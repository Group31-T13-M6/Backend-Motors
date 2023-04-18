import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const validateIsOwnerImageMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const tokenId = req.validateAuth.sub;
    const image = req.validatedImage;

    if (image.announcement.userId !== tokenId) {
        throw new AppError("Action not valid!", 401);
    }

    return next();
};

export { validateIsOwnerImageMiddleware };
