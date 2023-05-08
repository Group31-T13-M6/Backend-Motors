import { Request, Response } from "express";
import { IAnnouncementImageUpdate } from "../interfaces/announcement";
import { deleteAnnouncementImageService } from "../services/images/deleteImage.service";
import { updateAnnouncementImageService } from "../services/images/updateImage.service";

const updateAnnouncementImageController = async (
  req: Request,
  res: Response
) => {
  const payload: IAnnouncementImageUpdate = req.validatedBody;
  const data = await updateAnnouncementImageService(req.params.id, payload);
  return res.status(200).json(data);
};

const deleteAnnouncementImageController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await deleteAnnouncementImageService(id);
  return res.status(204).json();
};

export { updateAnnouncementImageController, deleteAnnouncementImageController };
