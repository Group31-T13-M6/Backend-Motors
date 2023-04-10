import { prismaClient } from "../../server";
import {
  IAnnouncement,
  IAnnouncementRegister,
} from "../../interfaces/announcement";

const registerAnnouncementService = async (
  data: IAnnouncementRegister
): Promise<IAnnouncement> => {
  const { images: imagesData, ...announcementData } = data;

  const announcement = await prismaClient.announcement.create({
    data: {
      ...announcementData,
      images: {
        create: imagesData,
      },
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

  return announcement;
};

export { registerAnnouncementService };
