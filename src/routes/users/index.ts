import { Router } from "express";
import { createUserController } from "../../controllers/users.controllers";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { validateEmailMiddlewares } from "../../middlewares/user/validateEmail.middlewares";
import { createUserSchema } from "../../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post(
    "",
    validateSchemaMiddleware(createUserSchema),
    validateEmailMiddlewares,
    createUserController
);

export { userRoutes };
