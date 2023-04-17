import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const validadeIsOwner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;
    const tokenId = req.validateAuth.sub;

    if (id !== tokenId) {
        throw new AppError("Action not valid!", 401);
    }
    return next();
};

export { validadeIsOwner };
