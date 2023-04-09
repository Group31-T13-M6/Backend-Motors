import { Request, Response } from "express";
import { IAnnouncementRegister } from "../interfaces/announcement";
import { deleteAnnouncementService } from "../services/announcement/deleteAnnouncement.service";
import { registerAnnouncementService } from "../services/announcement/registerAnnouncement.service";
import { getByAnnouncementIdService } from "../services/announcement/getByAnnouncementId.service";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.service";
import { getAllAnnouncementService } from "../services/announcement/getAllAnnouncements.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const announcement: IAnnouncementRegister = req.validatedBody;
  const data = await registerAnnouncementService(announcement);
  return res.status(201).json(data);
};

const getAllAnnouncementsController = async (req: Request, res: Response) => {
  const skip = Number(req.query.skip) || 0;
  const take = Number(req.query.take) || 12;
  const data = await getAllAnnouncementService(skip, take);
  return res.status(200).json(data);
};

const getByAnnouncementIDController = async (req: Request, res: Response) => {
  const announcement = req.validatedAnnouncement;
  const data = await getByAnnouncementIdService(announcement);
  return res.status(200).json(data);
};

const updateAnnouncementController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const data = updateAnnouncementService(params.id, body);
  return res.status(200).json(data);
};

const deleteAnnouncementController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteAnnouncementService(id);
  return res.status(204);
};

export {
  createAnnouncementController,
  getAllAnnouncementsController,
  getByAnnouncementIDController,
  updateAnnouncementController,
  deleteAnnouncementController,
};
