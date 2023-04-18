import { Router } from "express";
import { updateAddressController } from "../../controllers/address.controller";
import { createUserController } from "../../controllers/users.controllers";
import { validateAuthUserMiddleware } from "../../middlewares/global/validateAuthUser.middlewares";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { validadeIsOwnerMiddleware } from "../../middlewares/user/validadeIsOwner.middleware";
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
    validadeIsOwnerMiddleware,
    updateAddressController
);

export { userRoutes };
