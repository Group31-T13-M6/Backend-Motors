import { prismaClient } from "../../server";
import { AppError } from "../../errors";
import {
  IAnnouncement,
  IAnnouncementUpdate,
} from "../../interfaces/announcement";

const updateAnnouncementService = async (
  id: string,
  data: IAnnouncementUpdate
): Promise<IAnnouncement> => {
  const isEmpty = Object.keys(data).length <= 0;

  if (isEmpty) {
    throw new AppError("your request body is empty.", 400);
  }

  const announcement = await prismaClient.announcement.update({
    where: {
      id: id,
    },
    data: data,
  });

  return announcement;
};

export { updateAnnouncementService };
