import prismaClient from "../../server";

const deleteAnnouncementService = async (id: string): Promise<void> => {
  await prismaClient.announcement.delete({
    where: {
      id,
    },
  });
};

export { deleteAnnouncementService };
