import { prismaClient } from "../../server";
import { AppError } from "../../errors";

import { IComment, IUpdateAndRegisterComment } from "../../interfaces/comments";

const updateCommentService = async (
  id: string,
  data: IUpdateAndRegisterComment
) => {
  try {
    const comment = await prismaClient.comment.update({
      where: {
        id: id,
      },
      data: data,
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

    return comment;
  } catch (error) {
    console.log(error);
    throw new AppError("Unable to update comment");
  }
};

export { updateCommentService };
