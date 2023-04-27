import { AppError } from "../../errors";
import { IAddressUpdate } from "../../interfaces/address";
import { prismaClient } from "../../server";

const updateAddressService = async (data: IAddressUpdate, id: string) => {
  const isEmpty = Object.keys(data).length <= 0;

  if (isEmpty) {
    throw new AppError("your request body is empty.", 400);
  }

  const address = await prismaClient.address.update({
    where: {
      userId: id,
    },
    data: data,
  });

  return address;
};

export { updateAddressService };
