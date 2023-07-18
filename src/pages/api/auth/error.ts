import { NextApiRequest, NextApiResponse } from "next";

export default async function error(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(500).json({ error: "Authentication error" });
}
