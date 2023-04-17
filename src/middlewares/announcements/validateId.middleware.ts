import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const isValidAnnouncementIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const isAnnouncement = await prismaClient.announcement.findUnique({
    where: {
      id,
    },
    include: {
      images: {
        select: {
          id: true,
          url: true,
          position: true,
        },
      },
    },
  });

  if (!isAnnouncement) {
    throw new AppError("Params 'id' is not valid uuid announcement.", 401);
  }

  req.validatedAnnouncement = isAnnouncement;
  return next();
};

export { isValidAnnouncementIdMiddleware };
