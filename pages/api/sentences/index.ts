import type { NextApiRequest, NextApiResponse} from "next";
import { sentences } from "../../../data/sentences";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(sentences);
}