import { Request, Response, Router } from "express";
import Controller from "../interfaces/controller.interface";
import onesideModel from "./oneside.model";

export default class nsideController implements Controller {
    public router = Router();
    private onesideM = onesideModel;

    constructor() {
        this.router.get("/api/kategoriak", this.getAll);
    }

    private getAll = async (req: Request, res: Response) => {
        try {
            const data = await this.onesideM.find().sort({ _id: 1 });
            res.send(data);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    };
}
