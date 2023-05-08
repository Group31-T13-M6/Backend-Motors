import * as yup from "yup";
import { announcementSchema } from "./announcements.schemas";
import { userSchema } from "./users.schemas";

const updateAndRegisterCommentSchema = yup.object().shape({
  content: yup.string().required(),
})

const commentSchema = yup.object().shape({
  id: yup.string().required(),
  content: yup.string().required(),
  announcement: announcementSchema.required(),
  announcementId: yup.string().required(),
  user: userSchema.required(),
  userId: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export {updateAndRegisterCommentSchema, commentSchema}