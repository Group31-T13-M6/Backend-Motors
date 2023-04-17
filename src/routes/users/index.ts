import { Router } from "express";
import { updateAddressController } from "../../controllers/address.controller";
import { createUserController } from "../../controllers/users.controllers";
import { validateAuthUserMiddleware } from "../../middlewares/global/validadeAuthUser.middlewares";
import { validadeIsOwner } from "../../middlewares/global/validadeIsOwner";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { validateEmailMiddlewares } from "../../middlewares/user/validateEmail.middlewares";
import { updateAddressSchema } from "../../schemas/address";
import { createUserSchema } from "../../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post(
    "",
    validateSchemaMiddleware(createUserSchema),
    validateEmailMiddlewares,
    createUserController
);

userRoutes.patch(
    "/:id/address",
    validateAuthUserMiddleware,
    validateSchemaMiddleware(updateAddressSchema),
    validadeIsOwner,
    updateAddressController
);

export { userRoutes };
