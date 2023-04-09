import prismaClient from "../../server";
import { IAnnouncement } from "../../interfaces/announcement";

const getByAnnouncementIdService = async (id: string): Promise<IAnnouncement> => {
  const announcement = await prismaClient.announcement.findUnique({
    where: {
      id: id,
    },
  })
  return announcement
};

export { getByAnnouncementIdService }