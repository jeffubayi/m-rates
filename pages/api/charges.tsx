import type { NextApiRequest, NextApiResponse } from "next";

// API TEST functionality (gets transaction charges )
//http:localhost:3000/api/getMoviesById?id=tt0366629

type Data = {
    fuliza: any;
    mshwari: any;
    globalPay:any;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const mshwari: any[] = [
    ];
    const fuliza: any[] = [
    ];
    const globalPay: any[]  = []
    res.send({
        mshwari,
        fuliza,
        globalPay
    });
}