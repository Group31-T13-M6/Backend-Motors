import { hashSync } from "bcryptjs";
import { IUser, IUserRegister } from "../../interfaces/users";
import { prismaClient } from "../../server";

function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
): Omit<User, Key> {
    for (let key of keys) {
        delete user[key];
    }
    return user;
}

const registerUserService = async (data: IUserRegister) => {
    const { address: addressData, password: passwordData, ...userData } = data;
    const hashedPassword = hashSync(passwordData, 10);
    const user = await prismaClient.user.create({
        data: {
            ...userData,
            password: hashedPassword,
            address: {
                create: addressData,
            },
        },
        include: {
            address: {
                select: {
                    id: true,
                    cep: true,
                    state: true,
                    city: true,
                    street: true,
                    number: true,
                    complement: true,
                },
            },
        },
    });

    const resultUser = exclude(user, ["password"]);

    return resultUser;
};

export { registerUserService };
