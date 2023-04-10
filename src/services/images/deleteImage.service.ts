import { prismaClient } from "../../server";

const deleteAnnouncementImageService = async (id: string): Promise<void> => {
  await prismaClient.image.delete({
    where: {
      id,
    },
  });

  return;
};

export { deleteAnnouncementImageService };
