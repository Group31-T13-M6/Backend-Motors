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
import { validateAuthUserMiddleware } from "../../middlewares/global/validateAuthUser.middlewares";
import { validateIsOwnerAnnouncementMiddleware } from "../../middlewares/announcements/validateIsOwnerAnnouncement.middlewares";
import { validateIsOwnerImageMiddleware } from "../../middlewares/images/validadeIsOwnerImage.middlewares";

const announcementRoutes = Router();

announcementRoutes.post(
    "",
    validateAuthUserMiddleware,
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
    validateAuthUserMiddleware,
    validateSchemaMiddleware(updateAnnouncementSchema),
    isValidAnnouncementIdMiddleware,
    validateIsOwnerAnnouncementMiddleware,
    updateAnnouncementController
);

announcementRoutes.delete(
    "/:id",
    validateAuthUserMiddleware,
    isValidAnnouncementIdMiddleware,
    validateIsOwnerAnnouncementMiddleware,
    deleteAnnouncementController
);

// Images Route

announcementRoutes.patch(
    "/image/:id",
    validateAuthUserMiddleware,
    validateSchemaMiddleware(updateAnnouncementImageSchema),
    isValidImageIdMiddleware,
    validateIsOwnerImageMiddleware,
    updateAnnouncementImageController
);

announcementRoutes.delete(
    "/image/:id",
    validateAuthUserMiddleware,
    isValidImageIdMiddleware,
    validateIsOwnerImageMiddleware,
    deleteAnnouncementImageController
);

export { announcementRoutes };
