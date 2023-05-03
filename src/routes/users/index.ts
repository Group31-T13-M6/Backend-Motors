import { Router } from "express";
import { updateAddressController } from "../../controllers/address.controller";
import { validateAuthUserMiddleware } from "../../middlewares/global/validateAuthUser.middlewares";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { validateIsOwnerMiddleware } from "../../middlewares/user/validadeIsOwner.middleware";
import { validateEmailMiddlewares } from "../../middlewares/user/validateEmail.middlewares";
import { updateAddressSchema } from "../../schemas/address";
import {
  createUserSchema,
  updateUserSchema,
} from "../../schemas/users.schemas";
import {
  createUserController,
  deleteUserController,
  getUserController,
  getUserPerIdController,
  updateUserController,
} from "../../controllers/users.controllers";
import { validateIsUserMiddleware } from "../../middlewares/user/validateIsUser.middleware";

const userRoutes = Router();

userRoutes.get("", validateAuthUserMiddleware, getUserController);

userRoutes.get("/:id", validateIsUserMiddleware, getUserPerIdController);

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

userRoutes.patch(
  "/:id",
  validateAuthUserMiddleware,
  validateSchemaMiddleware(updateUserSchema),
  updateUserController
);

userRoutes.delete(
  "/:id",
  validateAuthUserMiddleware,
  validateIsOwnerMiddleware,
  deleteUserController
);

export { userRoutes };
