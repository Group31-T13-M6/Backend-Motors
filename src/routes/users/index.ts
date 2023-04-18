import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
} from '../../controllers/users.controllers';
import { validateSchemaMiddleware } from '../../middlewares/global/validateSchema.middleware';
import { createUserSchema } from '../../schemas/users.schemas';

const userRoutes = Router();

userRoutes.post(
  '',
  validateSchemaMiddleware(createUserSchema),
  createUserController
);

userRoutes.get('/:id', getUserByIdController);

userRoutes.patch('/:id', updateUserController);

userRoutes.delete('/:id', deleteUserController);

export { userRoutes };
