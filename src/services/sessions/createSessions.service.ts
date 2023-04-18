import { compareSync } from "bcryptjs";
import { AppError } from "../../errors";
import { IUserLogin } from "../../interfaces/users";
import { prismaClient } from "../../server";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionsService = async (data: IUserLogin) => {
    const { email, password } = data;
    const isUser = await prismaClient.user.findUnique({
        where: {
            email,
        },
    });

    const passwordSeach = compareSync(password, isUser.password);

    if (!passwordSeach) {
        throw new AppError("Email or password not found!", 403);
    }

    const token = jwt.sign(
        { email: isUser.email, type_user: isUser.type_user },
        process.env.SECRET_KEY,
        {
            expiresIn: "24h",
            subject: isUser.id,
        }
    );

    return { token };
};

export { createSessionsService };
