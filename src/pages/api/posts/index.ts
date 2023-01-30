import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
    id: number;
    content: string;
}

const db = [
    { id: 0, content: "hi" },
    { id: 1, content: "hi" },
    { id: 2, content: "hi" },
    { id: 3, content: "hi" },
    { id: 4, content: "hi" },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(db);
}
