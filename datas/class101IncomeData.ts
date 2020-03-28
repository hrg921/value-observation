export const class101IncomeData = [
  { time: new Date("04/10/2019"), value: { currency: "KRW", amount: 1889250 } },
  { time: new Date("05/09/2019"), value: { currency: "KRW", amount: 3313630 } },
  { time: new Date("06/10/2019"), value: { currency: "KRW", amount: 3511081 } },
  { time: new Date("07/10/2019"), value: { currency: "KRW", amount: 3318330 } },
  { time: new Date("08/09/2019"), value: { currency: "KRW", amount: 3053000 } },
  { time: new Date("09/10/2019"), value: { currency: "KRW", amount: 4665470 } },
  { time: new Date("10/10/2019"), value: { currency: "KRW", amount: 2671168 } },
  { time: new Date("11/11/2019"), value: { currency: "KRW", amount: 1583070 } },
  { time: new Date("12/10/2019"), value: { currency: "KRW", amount: 1583070 } },
  { time: new Date("01/10/2020"), value: { currency: "KRW", amount: 3200663 } },
  { time: new Date("02/10/2020"), value: { currency: "KRW", amount: 3548033 } },
  { time: new Date("03/10/2020"), value: { currency: "KRW", amount: 3711781 } }
];

export const class101IncomeAmountData = class101IncomeData.map(
  e => e.value.amount
);
export const countClass101IncomeAmount = class101IncomeAmountData.length;
export const totalClass101IncomeAmount = class101IncomeData
  .map(e => e.value.amount)
  .reduce((p, n) => p + n, 0);
export const minClass101IncomeAmount = Math.min(...class101IncomeAmountData);
export const maxClass101IncomeAmount = Math.max(...class101IncomeAmountData);
export const averageClass101IncomeAmount =
  totalClass101IncomeAmount / countClass101IncomeAmount;
