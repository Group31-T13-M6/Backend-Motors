import {IUpdateAndRegisterComment } from "../../interfaces/comments";
import { prismaClient } from "../../server";

const registerCommentService = async (
  data: IUpdateAndRegisterComment,
  announcementId: string,
  userId: string
) => {
  const comment = await prismaClient.comment.create({
    data: {
      ...data,
      announcementId: announcementId,
      userId: userId,
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

  return comment;
};

export { registerCommentService };
