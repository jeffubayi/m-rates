export const rateTypes =
    [
        { type: "Send to Registered Number", amount: 0 },
        { type: "Send to Unregistered Number", amount: 0 },
        { type: "Withdraw at Agent", amount: 0 },
        { type: "Maximum Withdrawable at Agent", amount: 0 },
        { type: "Minimum Balance - Send to Registered", amount: 0 },
        { type: "Minimum Balance - Send to Unregistered", amount: 0 },
        { type: "Amount + Withdrawal & Sending Charge", amount: 0 },
        { type: "Amount + Withdrawal Charge", amount: 0 }
    ]

export type costs = {
    type: string,
    amount: number,
}