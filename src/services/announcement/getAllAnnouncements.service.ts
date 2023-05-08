import { prismaClient } from "../../server";
import { IGetAllAnnouncements } from "../../interfaces/announcement";

const getAllAnnouncementService = async (
  skip: number,
  take: number
): Promise<IGetAllAnnouncements> => {
  const [announcements, total] = await prismaClient.$transaction([
    prismaClient.announcement.findMany({
      take,
      skip,
      include: {
        images: {
          select: {
            id: true,
            url: true,
            position: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    }),
    prismaClient.announcement.count(),
  ]);

  const totalPage = Math.ceil(total / take);
  return { total, totalPage, announcements };
};

export { getAllAnnouncementService };
