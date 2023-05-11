import { IComment } from "../../interfaces/comments";
import { prismaClient } from "../../server";
import { AppError } from "../../errors";

const getByCommentIdService = async (commentId: string): Promise<IComment> => {
  const comment = await prismaClient.comment.findUnique({
    where: {
      id: commentId,
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

  if (!comment) {
    throw new AppError("Params 'id' is not valid uuid comments.", 401);
  }

  return comment;
};

export { getByCommentIdService };
