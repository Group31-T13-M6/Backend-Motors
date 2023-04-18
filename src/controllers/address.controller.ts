import { Request, Response } from "express";
import { updateAddresService } from "../services/address/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
    const payload = req.validatedBody;
    const data = await updateAddresService(payload, req.params.id);
    return res.status(200).json(data);
};

export { updateAddressController };
