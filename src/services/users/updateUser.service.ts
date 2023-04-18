import { prismaClient } from '../../server';

//precisa de uma interface para atualizar o user
// quais campos ele é capaz de alterar

async function updateUserService(userId: string, data) {
  const user = await prismaClient.user.update({
    where: {
      id: userId,
    },
    data,
  });
  return user;
}
