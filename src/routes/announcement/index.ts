import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { isValidAnnouncementIdMiddleware } from "../../middlewares/announcements/validateId.middleware";
import { isValidImageIdMiddleware } from "../../middlewares/images/validateId.middleware";
import {
  createAnnouncementSchema,
  updateAnnouncementImageSchema,
  updateAnnouncementSchema,
} from "../../schemas/announcements.schemas";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  updateAnnouncementController,
  getAllAnnouncementsController,
  getByAnnouncementIDController,
} from "../../controllers/announcement.controllers";
import {
  deleteAnnouncementImageController,
  updateAnnouncementImageController,
} from "../../controllers/images.controllers";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  validateSchemaMiddleware(createAnnouncementSchema),
  createAnnouncementController
);

announcementRoutes.get("", getAllAnnouncementsController);

announcementRoutes.get(
  "/:id",
  isValidAnnouncementIdMiddleware,
  getByAnnouncementIDController
);

announcementRoutes.patch(
  "/:id",
  validateSchemaMiddleware(updateAnnouncementSchema),
  isValidAnnouncementIdMiddleware,
  updateAnnouncementController
);

announcementRoutes.delete(
  "/:id",
  isValidAnnouncementIdMiddleware,
  deleteAnnouncementController
);

// Images Route

announcementRoutes.patch(
  "/image/:id",
  validateSchemaMiddleware(updateAnnouncementImageSchema),
  isValidImageIdMiddleware,
  updateAnnouncementImageController
);

announcementRoutes.delete(
  "/image/:id",
  isValidImageIdMiddleware,
  deleteAnnouncementImageController
);

export { announcementRoutes };
