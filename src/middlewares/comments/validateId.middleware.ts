import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../server";
import { AppError } from "../../errors";

const isValidCommentIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.commentId;
  const isComment = await prismaClient.comment.findUnique({
    where: {
      id: id,
    },
    include: {
      announcement: {
        select: {
          id: true,
          description: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          description: true,
        },
      },
    },
  });

  delete isComment.userId;

  if (!isComment) {
    throw new AppError("Params 'id' is not valid uuid comments.", 401);
  }
  return next();
};

export { isValidCommentIdMiddleware };
