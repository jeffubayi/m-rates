import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// API TEST functionality (gets the james bond movie details by id)
//http:localhost:3000/api/getMoviesById?id=tt0366629

type Data = {
  movies?: [];
  error?: string;
  message?: string;
  charges?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const amont: any = req.query.amount;
  console.log(`res`, amont);

  console.log(`amont`, amont);
  if (amont) {
    let val: string | number = "";
    let val2: string | number = "";
    let val3: string | number = "";
    let val4: string | number = "";
    let val5: string | number = "";

    if (amont <= 0) {
      val = "";
      val2 = "";
      val3 = "";
      val4 = "";
      val5 = "";
    } else if (amont <= 100) {
      val = "FREE";
      val2 = "N/A";
      val3 = "N/A";
      val4 = "N/A";
      val5 = "10";
    } else if (amont <= 199) {
      val = 11;
      val2 = 11;
      val3 = 45;
      val4 = "N/A";
      val5 = 27;
    } else if (amont <= 500) {
      val = 11;
      val2 = 11;
      val3 = 45;
      val4 = 34;
      val5 = 27;
    } else if (amont <= 1000) {
      val = 15;
      val2 = 15;
      val3 = 49;
      val4 = 34;
      val5 = 28;
    } else if (amont <= 1500) {
      val = 26;
      val2 = 26;
      val3 = 59;
      val4 = 34;
      val5 = 28;
    } else if (amont <= 2500) {
      val = 41;
      val2 = 41;
      val3 = 74;
      val4 = 34;
      val5 = 28;
    } else if (amont <= 3500) {
      val = 56;
      val2 = 56;
      val3 = 112;
      val4 = 67;
      val5 = 50;
    } else if (amont <= 5000) {
      val = 61;
      val2 = 61;
      val3 = 135;
      val4 = 67;
      val5 = 67;
    } else if (amont <= 7500) {
      val = 77;
      val2 = 77;
      val3 = 166;
      val4 = 112;
      val5 = 84;
    } else if (amont <= 10000) {
      val = 87;
      val2 = 87;
      val3 = 205;
      val4 = 112;
      val5 = 112;
    } else if (amont <= 15000) {
      val = 97;
      val2 = 97;
      val3 = 265;
      val4 = 197;
      val5 = 162;
    } else if (amont <= 20000) {
      val = 102;
      val2 = 102;
      val3 = 288;
      val4 = 197;
      val5 = 180;
    } else if (amont <= 35000) {
      val = 105;
      val2 = 105;
      val3 = 309;
      val4 = "N/A";
      val5 = 191;
    } else if (amont <= 50000) {
      val = 105;
      val2 = 105;
      val3 = "N/A";
      val4 = "N/A";
      val5 = 191;
    } else if (amont <= 70000) {
      val = 105;
      val2 = 105;
      val3 = "N/A";
      val4 = "N/A";
      val5 = 300;
    } else if (amont > 70000) {
      val = "ammount exceeds maximum transaction allowed";
      val2 = "ammount exceeds maximum transaction allowed";
      val3 = "ammount exceeds maximum transaction allowed";
      val4 = "ammount exceeds maximum transaction allowed";
      val5 = "ammount exceeds maximum transaction allowed";
    } else {
      val = "please enter numbers";
      val2 = "please enter numbers";
      val3 = "please enter numbers";
      val4 = "please enter numbers";
    }
    const charges = [
      { type: "send to mpesa user", amount: val },
      { type: "other mobile money  user", amount: val2 },
      { type: "mpesa unregistered", amount: val3 },
      { type: "mpesa agent withdrawal", amount: val4 },
      { type: "ATM withdrawal", amount: val5 },
    ];
    res.send({
      charges,
    });
  }
}
