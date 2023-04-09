import prismaClient from "../../server";
import { IAnnouncement } from "../../interfaces/announcement";

const getAllAnnouncementService = async (id: string): Promise<IAnnouncement> => {
  const announcement = await prismaClient.announcement.findUnique({
    where: {
      id: id,
    },
  })
  return announcement
};

export { getAllAnnouncementService }