import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  updateAnnouncementController,
  getAllAnnouncementsController,
  getByAnnouncementIDController,
} from "../../controllers/announcement.controllers";
import validateSchemaMiddleware from "../../middlewares/global/validateSchema.middleware";
import { createAnnouncementSchema } from "../../schemas/announcements.schemas";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  validateSchemaMiddleware(createAnnouncementSchema),
  createAnnouncementController
);

announcementRoutes.get("", getAllAnnouncementsController);
announcementRoutes.get("/:id", getByAnnouncementIDController);
announcementRoutes.patch("/:id", updateAnnouncementController);
announcementRoutes.delete("/:id", deleteAnnouncementController);

export default announcementRoutes;
