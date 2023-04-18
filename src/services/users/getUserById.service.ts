import { prismaClient } from '../../server';

async function getUserService(userId: string) {
  const user = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

export { getUserService };
