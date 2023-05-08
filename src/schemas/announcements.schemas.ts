import * as yup from "yup";

const createAnnouncementImages = yup.object().shape({
  url: yup.string().required(),
  position: yup.number().required().positive().max(6),
});

const createAnnouncementSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required().max(4),
  fuel: yup.number().positive().required().max(3),
  mileage: yup.number().positive().required().max(999999),
  color: yup.string().required().max(30),
  price: yup.number().positive().required(),
  fipe_table: yup.number().positive().required(),
  description: yup.string().required().max(320),
  images: yup
    .array(createAnnouncementImages)
    .required()
    .min(1)
    .test("position", "All images positions must be unique.", (value) => {
      const positions = {};
      const isPositionUnique = value.every(({ position }) => {
        if (!positions[position]) {
          positions[position] = true;
          return true;
        }

        return false;
      });

      return isPositionUnique;
    }),
});

const announcementSchema = yup.object().shape({
  id: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required().max(4),
  fuel: yup.number().positive().required().max(3),
  mileage: yup.number().positive().required().max(999999),
  color: yup.string().required().max(30),
  price: yup.number().positive().required(),
  fipe_table: yup.number().positive().required(),
  description: yup.string().required().max(320),
  images: yup.array(createAnnouncementImages),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

const updateAnnouncementSchema = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired().max(4),
  fuel: yup.number().positive().notRequired().max(3),
  mileage: yup.number().positive().notRequired().max(999999),
  color: yup.string().notRequired().max(30),
  price: yup.number().positive().notRequired(),
  fipe_table: yup.number().positive().notRequired(),
  description: yup.string().notRequired().max(320),
});

const updateAnnouncementImageSchema = yup.object().shape({
  url: yup.string().notRequired(),
});

export {
  createAnnouncementSchema,
  updateAnnouncementSchema,
  updateAnnouncementImageSchema,
  announcementSchema
};
