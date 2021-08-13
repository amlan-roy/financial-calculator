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
      return [
        new ResultData('EMI amount', emi.toFixed(2)),
        new ResultData('Payable amount', totalAmount.toFixed(2)),
        new ResultData(
          'Interest Paid',
          (totalAmount - principalAmount).toFixed(2),
        ),
      ];
    case 2:
      var frequencyOfInvestment = 1;
      if (data[0] === 'year') {
        frequencyOfInvestment = 1;
      } else {
        frequencyOfInvestment = 12;
      }
      const periodicInvestmentAmount = parseInt(data[1]);
      const rateOfInterest = data[2] / (frequencyOfInvestment * 100);
      const duration = parseInt(data[3] * frequencyOfInvestment);
      const maturityAmount =
        periodicInvestmentAmount *
        ((Math.pow(1 + rateOfInterest, duration) - 1) / rateOfInterest) *
        (1 + rateOfInterest);

      return [
        new ResultData(
          'Total Profit',
          ((maturityAmount - periodicInvestmentAmount) * duration).toFixed(2),
        ),
        new ResultData(
          'Total amount Invested',
          (periodicInvestmentAmount * duration).toFixed(2),
        ),
        new ResultData('Future value', maturityAmount.toFixed(2)),
      ];

    case 3:
      return dummyData;
    case 4:
      return dummyData;
    case 5:
      return dummyData;
    default:
      return dummyData;
  }
};
