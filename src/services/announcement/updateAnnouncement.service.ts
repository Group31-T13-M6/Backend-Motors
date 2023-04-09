import prismaClient from "../../server";
import { IAnnouncement, IAnnouncementUpdate } from "../../interfaces/announcement";

const updateAnnouncementService = async (id: string, data:IAnnouncementUpdate): Promise<IAnnouncement> => {
  const announcement = await prismaClient.announcement.update({
    where: {
        id: id
    },
    data: data
  })
  return announcement
};

export { updateAnnouncementService }