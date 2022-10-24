import type { NextApiRequest, NextApiResponse } from "next";

// API TEST functionality (gets transaction charges )
//http:localhost:3000/api/getMoviesById?id=tt0366629

type Data = {
    charges: any;

};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const amount: any = req.query.amount;
    if (amount) {
        let val: string | number = 0;
        let val2: string | number = 0;
        let val3: string | number = 0;
        let val4: string | number = 0;

        if (amount == 0 || "") {
            val = 0;
            val2 = 0;
            val3 = 0;
            val4 = 0;
        } else if (amount <= 100) {
            val = 0;
            val2 = 0;
            val3 = 10;
            val4 = 90;
        } else if (amount <= 199) {
            val = 11;
            val2 = 11;
            val3 = 45;
            val4 = 0;
        } else if (amount <= 500) {
            val = 11;
            val2 = 11;
            val3 = 45;
            val4 = 34;
        } else if (amount <= 1000) {
            val = 15;
            val2 = 15;
            val3 = 49;
            val4 = 34;
        } else if (amount <= 1500) {
            val = 26;
            val2 = 26;
            val3 = 59;
            val4 = 34;
        } else if (amount <= 2500) {
            val = 41;
            val2 = 41;
            val3 = 74;
            val4 = 34;
        } else if (amount <= 3500) {
            val = 56;
            val2 = 56;
            val3 = 112;
            val4 = 67;
        } else if (amount <= 5000) {
            val = 61;
            val2 = 61;
            val3 = 135;
            val4 = 67;
        } else if (amount <= 7500) {
            val = 77;
            val2 = 77;
            val3 = 166;
            val4 = 112;
        } else if (amount <= 10000) {
            val = 87;
            val2 = 87;
            val3 = 205;
            val4 = 112;
        } else if (amount <= 15000) {
            val = 97;
            val2 = 97;
            val3 = 265;
            val4 = 197;
        } else if (amount <= 20000) {
            val = 102;
            val2 = 102;
            val3 = 288;
            val4 = 197;
        } else if (amount <= 35000) {
            val = 105;
            val2 = 105;
            val3 = 309;
            val4 = "N/A";
        } else if (amount <= 50000) {
            val = 105;
            val2 = 105;
            val3 = "N/A";
            val4 = "N/A";
        } else {
            val = 105;
            val2 = 105;
            val3 = "N/A";
            val4 = "N/A";
        }
    

    const charges: any[] = [
        { type: "Fuliza", amount: val },
        { type: "Mshwari", amount: val2 },
        { type: "ATM", amount: val3 },
        { type: "Global Pay", amount: val4 },
    ];
    res.send({
        charges
    });
}
}