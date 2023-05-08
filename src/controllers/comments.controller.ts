import { Request, Response } from "express";
import { updateCommentService } from "../services/comments/updateComment.service";
import { deleteCommentService } from "../services/comments/deleteComment.service";
import { IUpdateAndRegisterComment } from "../interfaces/comments";
import { getByCommentIdService } from "../services/comments/getByIdComment.service";
import { getAllCommentsByAnnouncementIdService } from "../services/comments/getAllCommentsByAnnouncementId.service";
import { registerCommentService } from "../services/comments/registerComment.service";
import { log } from "console";

const registerCommentController = async (req: Request, res: Response) => {
  const payload: IUpdateAndRegisterComment = req.validatedBody;
  const { params, validateAuth } = req;
  console.log(params);

  const data = await registerCommentService(
    payload,
    params.id,
    validateAuth.sub
  );
  return res.status(201).json(data);
};

const getAllCommentsByAnnouncementIdController = async (
  req: Request,
  res: Response
) => {
  const skip = Number(req.query.skip) || 0;
  const take = Number(req.query.take) || 12;
  const { announcementId } = req.params;
  const data = await getAllCommentsByAnnouncementIdService(
    skip,
    take,
    announcementId
  );
  return res.status(200).json(data);
};

const getByCommentIDController = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  const data = await getByCommentIdService(commentId);
  return res.status(200).json(data);
};

const updateCommentController = async (req: Request, res: Response) => {
  const payload: IUpdateAndRegisterComment = req.body;
  const data = await updateCommentService(req.params.commentId, payload);
  return res.status(200).json(data);
};

const deleteCommentController = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  await deleteCommentService(commentId);
  return res.status(204).json();
};

export {
  registerCommentController,
  getAllCommentsByAnnouncementIdController,
  getByCommentIDController,
  updateCommentController,
  deleteCommentController,
};
