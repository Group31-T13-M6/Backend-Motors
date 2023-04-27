import { prismaClient } from "../../server";

const getUserService = async (id: string) => {
  const user = await prismaClient.user.findUnique({
    where: { id },
    include: { address: true, announcements: true },
  });

  delete user.password;
  return user;
};

export { getUserService };
