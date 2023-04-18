import * as yup from "yup";

const createAddressSchema = yup.object().shape({
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
});

const updateAddressSchema = yup.object().shape({
    cep: yup.string(),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup.string(),
    complement: yup.string(),
});

export { createAddressSchema, updateAddressSchema };
