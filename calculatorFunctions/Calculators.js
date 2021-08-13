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
      return dummyData;
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
