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

export { createAnnouncementSchema };
