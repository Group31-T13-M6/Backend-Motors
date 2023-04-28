import { Router } from "express";
import { updateAddressController } from "../../controllers/address.controller";
import { validateAuthUserMiddleware } from "../../middlewares/global/validateAuthUser.middlewares";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { validateIsOwnerMiddleware } from "../../middlewares/user/validadeIsOwner.middleware";
import { validateEmailMiddlewares } from "../../middlewares/user/validateEmail.middlewares";
import { updateAddressSchema } from "../../schemas/address";
import { createUserSchema } from "../../schemas/users.schemas";
import {
  createUserController,
  deleteUserController,
  getUserController,
} from "../../controllers/users.controllers";

const userRoutes = Router();

userRoutes.get("", validateAuthUserMiddleware, getUserController);

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
  validateIsOwnerMiddleware,
  updateAddressController
);

userRoutes.delete(
  "/:id",
  validateAuthUserMiddleware,
  validateIsOwnerMiddleware,
  deleteUserController
);

export { userRoutes };
