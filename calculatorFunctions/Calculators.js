class ResultData {
  constructor(title, result) {
    this.title = title;
    this.result = result;
  }
}

const dummyData = [
  { title: 'title', result: '123.4' },
  { title: 'title', result: '123.4' },
  { title: 'title', result: '123.4' },
  { title: 'title', result: '123.4' },
];

export default calculator = (data) => {
  const id = data.id;
  switch (id) {
    case 1:
      const principalAmount = parseInt(data[0]);
      const loanTenureMonths = parseInt(data[1] * 12);
      const rateOfInterestPerMonth = data[2] / 1200;
      const emi =
        (principalAmount *
          rateOfInterestPerMonth *
          Math.pow(1 + rateOfInterestPerMonth, loanTenureMonths)) /
        (Math.pow(1 + rateOfInterestPerMonth, loanTenureMonths) - 1);
      const totalAmount = emi * loanTenureMonths;
      const interestPaid = totalAmount - principalAmount;
      if (!(emi && interestPaid && totalAmount)) {
        return false;
      } else {
        return [
          new ResultData('EMI amount', emi.toFixed(2)),
          new ResultData('Payable amount', totalAmount.toFixed(2)),
          new ResultData('Interest Paid', interestPaid.toFixed(2)),
        ];
      }
    case 2:
      // FV = P × ((1 + i)^n - 1) / i) × (1 + i)
      // FV = Future value
      // P = Amount invested at the start of every payment interval
      // n = Number of payments
      // i = Periodic interest rate
      // r = Expected Annual Returns (P.A %)
      const freq = data[0];
      const P = data[1];
      const r = data[2];
      const tenure = data[3];
      var n, i;
      if (freq === 'month') {
        i = r / (12 * 100);
        n = parseInt(tenure * 12);
      } else {
        i = r / 100;
        n = parseInt(tenure);
      }
      const FV = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const AmountInvested = P * n;
      const profit = FV - AmountInvested;

      if (!(FV && AmountInvested && profit)) {
        return false;
      } else {
        return [
          new ResultData('Future Value', FV.toFixed(2)),
          new ResultData('Amount Invested', AmountInvested.toFixed(2)),
          new ResultData('Profit', profit.toFixed(2)),
        ];
      }
    case 3:
      // A = P*(1+r)^t
      // A	=	final amount
      // P	=	initial principal balance
      // r	=	interest rate
      // t	=	number of time periods elapsed
      const P3 = data[0];
      const r3 = data[1] / 100;
      const t3 = data[2];
      const A3 = P3 * Math.pow(1 + r3, t3);
      const profit3 = A3 - P3;
      if (!(P3 && A3 && profit3)) {
        return false;
      } else {
        return [
          new ResultData('Final Value', parseFloat(A3).toFixed(2)),
          new ResultData('Amount Invested', parseFloat(P3).toFixed(2)),
          new ResultData('Profit', parseFloat(profit3).toFixed(2)),
        ];
      }

    case 4:
      const A4 = data[0];
      const r4 = data[1] / 100;
      const t4 = data[2];
      const infl = data[3] === 0 ? 0 : 6; //6.26% inflation is considered
      const P4 = (A4 * (1 + infl / 100)) / Math.pow(1 + r4, t4);
      if (!(P4 && A4)) {
        return false;
      } else {
        return [
          new ResultData(
            'Initial Investment Amount',
            parseFloat(P4).toFixed(2),
          ),
        ];
      }
    case 5:
      return dummyData;
    default:
      return dummyData;
  }
};
