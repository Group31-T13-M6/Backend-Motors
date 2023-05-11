import { Request, Response } from "express";
import { updateAddressService } from "../services/address/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
  const payload = req.validatedBody;
  console.log(payload)
  const data = await updateAddressService(payload, req.params.id);
  return res.status(200).json(data);
};

export { updateAddressController };
