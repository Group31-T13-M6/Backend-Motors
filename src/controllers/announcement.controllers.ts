import { Request, Response } from "express";
import { IAnnouncementRegister } from "../interfaces/announcement";
import { deleteAnnouncementService } from "../services/announcement/deleteAnnouncement.service";
import { registerAnnouncementService } from "../services/announcement/registerAnnouncement.service";
import { getByAnnouncementIdService } from "../services/announcement/getByAnnouncementId.service";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.service";

const createAnnouncementController = async (req: Request, res: Response) => {
  const announcement: IAnnouncementRegister = req.validatedBody;
  console.log(announcement)
  const data = await registerAnnouncementService(announcement);
  return res.status(201).json(data);
};

const getAllAnnouncementsController = async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
};

const getByAnnouncementIDController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = getByAnnouncementIdService(id);
  return res.status(200).json(data);
};

const updateAnnouncementController = async (req: Request, res: Response) => {
  const {body, params} = req
  const data = updateAnnouncementService(params.id, body)
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
