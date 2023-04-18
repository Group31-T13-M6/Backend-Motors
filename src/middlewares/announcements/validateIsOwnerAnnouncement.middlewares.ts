import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const validateIsOwnerAnnouncementMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const announcement = req.validatedAnnouncement;
    const tokenId = req.validateAuth.sub;

    if (announcement.userId !== tokenId) {
        throw new AppError("Action not valid!", 401);
    }

    return next();
};

export { validateIsOwnerAnnouncementMiddleware };
