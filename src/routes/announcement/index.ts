import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { isValidAnnouncementIdMiddleware } from "../../middlewares/announcements/validateId.middleware";
import {
  createAnnouncementSchema,
  updateAnnouncementSchema,
} from "../../schemas/announcements.schemas";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  updateAnnouncementController,
  getAllAnnouncementsController,
  getByAnnouncementIDController,
} from "../../controllers/announcement.controllers";

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

export { announcementRoutes };
