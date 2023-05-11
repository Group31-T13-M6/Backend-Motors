import { IComment } from "../../interfaces/comments";
import { prismaClient } from "../../server";

const getAllCommentsByAnnouncementIdService = async (
  skip: number,
  take: number,
  announcementId: string
) => {
  const [comments, total] = await prismaClient.$transaction([
    prismaClient.comment.findMany({
      take,
      skip,
      where: {
        announcement: {
          id: announcementId,
        },
      },
      orderBy: {
        id: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    }),
    prismaClient.comment.count(),
  ]);
  const totalPage = Math.ceil(total / take);
  return { total, totalPage, comments };
};

export { getAllCommentsByAnnouncementIdService };
