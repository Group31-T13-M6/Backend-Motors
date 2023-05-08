import { prismaClient } from "../../server";
import { AppError } from "../../errors";
import { Image } from "@prisma/client";
import { IAnnouncementImageUpdate } from "../../interfaces/announcement";

const updateAnnouncementImageService = async (
  id: string,
  data: IAnnouncementImageUpdate
): Promise<Image> => {
  const isEmpty = Object.keys(data).length <= 0;

  if (isEmpty) {
    throw new AppError("your request body is empty.", 400);
  }

  const image = await prismaClient.image.update({
    where: {
      id: id,
    },
    data: data,
  });

  return image;
};

export { updateAnnouncementImageService };
