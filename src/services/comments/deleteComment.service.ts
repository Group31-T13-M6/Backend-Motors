import { AppError } from "../../errors";
import { prismaClient } from "../../server";

const deleteCommentService = async (id: string): Promise<void> => {
  try {
    await prismaClient.comment.delete({
      where: {
        id: id
      },
    });
  } catch (error) {
    throw new AppError("Unable to delete comment");
  }
};

export { deleteCommentService };
