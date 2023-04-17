import * as yup from "yup";

const createAddressSchema = yup.object().shape({
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
});

export { createAddressSchema };
