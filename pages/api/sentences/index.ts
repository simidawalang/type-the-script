import { Request, Response} from "express";
import { sentences } from "../../../data/sentences";

export default function handler(req: Request, res: Response) {
    res.status(200).json(sentences);
}