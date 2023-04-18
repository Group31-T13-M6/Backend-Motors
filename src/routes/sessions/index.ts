import { Router } from "express";
import { createSessionsController } from "../../controllers/sessions.controller";
import { validateSchemaMiddleware } from "../../middlewares/global/validateSchema.middleware";
import { createSessionsSchemas } from "../../schemas/sessions";

const sessionsRoutes = Router();

sessionsRoutes.post(
    "",
    validateSchemaMiddleware(createSessionsSchemas),
    createSessionsController
);

export { sessionsRoutes };
