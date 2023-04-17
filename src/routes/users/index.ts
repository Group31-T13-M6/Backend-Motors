import { Router } from "express";
import { createUserController } from "../../controllers/users.controllers";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { createUserSchema } from "../../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post(
    "",
    validateSchemaMiddleware(createUserSchema),
    createUserController
);

export { userRoutes };
