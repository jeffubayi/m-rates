import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// API TEST functionality (gets the james bond movie details by id)
//http:localhost:3000/api/getMoviesById?id=tt0366629

type Data = {
  movies?: [];
  error?: string;
  message?: string;
  sendAndWithdraw?: any;
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
    let val5: string | number = 0;
    let val6: string | number = 0;
    let val7: string | number = 0;
    let val8: string | number = 0;

    if (amount == 0 || "") {
      val = 0;
      val2 = 0;
      val3 = 0;
      val4 = 0;
      val5 = 0;
      val6 = 0;
      val7 = 0;
      val8 = 0;
    } else if (amount <= 100) {
      val = 0;
      val2 = 0;
      val3 = 10;
      val4 = 90;
      val5 = 100;
      val6 = 100;
      val7 = 110;
      val8 = 110;
    } else if (amount <= 199) {
      val = 11;
      val2 = 11;
      val3 = 45;
      val4 = 0;
      val5 = 27;
      val6 = 100;
      val7 = 110;
      val8 = 110;
    } else if (amount <= 500) {
      val = 11;
      val2 = 11;
      val3 = 45;
      val4 = 34;
      val5 = 27;
      val6 = 100;
      val7 = 110;
      val8 = 110;
    } else if (amount <= 1000) {
      val = 15;
      val2 = 15;
      val3 = 49;
      val4 = 34;
      val5 = 28;
      val6 = 100;
      val7 = 110;
      val8 = 110;
    } else if (amount <= 1500) {
      val = 26;
      val2 = 26;
      val3 = 59;
      val4 = 34;
      val5 = 28;
      val6 = 100;
      val7 = 110;
      val8 = 110;
    } else if (amount <= 2500) {
      val = 41;
      val2 = 41;
      val3 = 74;
      val4 = 34;
      val5 = 28;
    } else if (amount <= 3500) {
      val = 56;
      val2 = 56;
      val3 = 112;
      val4 = 67;
      val5 = 50;
    } else if (amount <= 5000) {
      val = 61;
      val2 = 61;
      val3 = 135;
      val4 = 67;
      val5 = 67;
    } else if (amount <= 7500) {
      val = 77;
      val2 = 77;
      val3 = 166;
      val4 = 112;
      val5 = 84;
    } else if (amount <= 10000) {
      val = 87;
      val2 = 87;
      val3 = 205;
      val4 = 112;
      val5 = 112;
    } else if (amount <= 15000) {
      val = 97;
      val2 = 97;
      val3 = 265;
      val4 = 197;
      val5 = 162;
    } else if (amount <= 20000) {
      val = 102;
      val2 = 102;
      val3 = 288;
      val4 = 197;
      val5 = 180;
    } else if (amount <= 35000) {
      val = 105;
      val2 = 105;
      val3 = 309;
      val4 = "N/A";
      val5 = 191;
    } else if (amount <= 50000) {
      val = 105;
      val2 = 105;
      val3 = "N/A";
      val4 = "N/A";
      val5 = 191;
    } else if (amount <= 70000) {
      val = 105;
      val2 = 105;
      val3 = "N/A";
      val4 = "N/A";
      val5 = 300;
    } else if (amount > 70000) {
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
    const sendAndWithdraw = [
      { type: "Send to Registered Number", amount: val },
      { type: "Send to Unregistered Number", amount: val2 },
      { type: "Withdraw at Agent", amount: val3 },
      { type: "Maximum Withdrawable at Agent", amount: val4 },
      { type: "Minimum Balance - Send to Registered", amount: val5 },
      { type: "Minimum Balance - Send to Unregistered", amount: val6 },
      { type: "Amount + Withdrawal & Sending Charge", amount: val7 },
      { type: "Amount + Withdrawal Charge", amount: val8 },
    ];
    res.send({
      sendAndWithdraw,
    });
  }
}
