import { prismaClient } from '../../server';

async function deleteUserService(userId: string) {
  const user = await prismaClient.user.delete({
    where: {
      id: userId,
    },
  });
  return user;
}

export { deleteUserService };
