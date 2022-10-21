import type { NextApiRequest, NextApiResponse } from "next";

// API TEST functionality (gets the paybill and till number costs)
//http:localhost:3000/api/getMoviesById?id=tt0366629

type Data = {
    tillNumber: any;
    paybillNumber: any
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const paybillNumber: any[] = [
    ];
    const tillNumber: any[] = [
    ];
    res.send({
        paybillNumber,
        tillNumber,
    });
}