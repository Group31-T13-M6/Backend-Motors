import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  updateAnnouncementController,
  getAllAnnouncementsController,
  getByAnnouncementIDController,
} from "../../controllers/announcement.controllers";
import { isValidAnnouncementIdMiddleware } from "../../middlewares/announcements/validateId.middleware";
import validateSchemaMiddleware from "../../middlewares/global/validateSchema.middleware";
import { createAnnouncementSchema } from "../../schemas/announcements.schemas";

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
  isValidAnnouncementIdMiddleware,
  updateAnnouncementController
);

announcementRoutes.delete(
  "/:id",
  isValidAnnouncementIdMiddleware,
  deleteAnnouncementController
);

export { announcementRoutes };
