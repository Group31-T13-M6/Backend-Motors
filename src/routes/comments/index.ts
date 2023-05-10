import { Router } from "express";
import { validateAuthUserMiddleware } from "../../middlewares/global/validateAuthUser.middlewares";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { updateAndRegisterCommentSchema } from "../../schemas/comments";
import { isValidAnnouncementIdMiddleware } from "../../middlewares/announcements/validateId.middleware";
import {
  deleteCommentController,
  getAllCommentsByAnnouncementIdController,
  getByCommentIDController,
  registerCommentController,
  updateCommentController,
} from "../../controllers/comments.controller";
import { isValidCommentIdMiddleware } from "../../middlewares/comments/validateId.middleware";

const commentsRoutes = Router();

commentsRoutes.get(
  "/announcements/:id/",
  isValidAnnouncementIdMiddleware,
  getAllCommentsByAnnouncementIdController
);

commentsRoutes.post(
  "/announcements/:id/",
  validateAuthUserMiddleware,
  validateSchemaMiddleware(updateAndRegisterCommentSchema),
  registerCommentController
);

commentsRoutes.get("/:commentId", getByCommentIDController);
commentsRoutes.patch(
  "/:commentId",
  isValidCommentIdMiddleware,
  validateSchemaMiddleware(updateAndRegisterCommentSchema),
  updateCommentController
);
commentsRoutes.delete(
  "/:commentId",
  isValidCommentIdMiddleware,
  deleteCommentController
);

export { commentsRoutes };
