class Item {
  constructor(id, title, description, imageUrl, inputs, detailedDescription) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.inputs = inputs;
    this.detailedDescription = detailedDescription;
  }
}
class InputModel {
  constructor(title, type, dropDownData) {
    this.title = title;
    this.type = type;
    this.dropDownData = dropDownData;
  }
}

export const NUMERIC_INPUT = 'numeric';
export const DROPDOWN_INPUT = 'drop-down';

export default DATA = [
  new Item(
    1,
    'EMI calculator',
    'Wish to calculate the monthly EMI of your loan? Calculate here.',
    'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg',
    [
      new InputModel('Loan Amount', NUMERIC_INPUT, null),
      new InputModel('Loan Tenure(Years)', NUMERIC_INPUT, null),
      new InputModel('Interest Rate(P.A)', NUMERIC_INPUT, null),
    ],
    {
      title: 'EMI',
      body: 'An equated monthly installment (EMI) is defined by Investopedia as "A fixed payment amount made by a borrower to a lender at a specified date each calendar month. Equated monthly installments are used to pay off both interest and principal each month, so that over a specified number of years, the loan is fully paid off along with interest." \n\nIt further explains that, with most common types of loans, such as real estate mortgages, the borrower makes fixed periodic payments to the lender over the course of several years with the goal of retiring the loan. EMIs differ from variable payment plans, in which the borrower is able to pay higher payment amounts at his or her discretion. In EMI plans, borrowers are mostly only allowed one fixed payment amount each month.\n\nThe benefit of an EMI for borrowers is that they know precisely how much money they will need to pay toward their loan each month, making the personal budgeting process easier. \n\n',
    },
  ),
  new Item(
    2,
    'SIP calculator',
    'Wish to invest periodically? Calculate the amount of wealth that you can generate',
    'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg',
    [
      new InputModel('Frequency of Investment', DROPDOWN_INPUT, [
        { value: 'year', label: 'Yearly' },
        { value: 'month', label: 'Monthly' },
      ]),
      new InputModel('Investment Amount ', NUMERIC_INPUT, null),
      new InputModel('Expected rate of return (P.A) ', NUMERIC_INPUT, null),
      new InputModel('Tenure (Years)', NUMERIC_INPUT, null),
    ],
    {
      title: 'SIP',
      body: 'A systematic investment plan (SIP) is an investment vehicle offered by many mutual funds to investors, allowing them to invest small amounts periodically instead of lump sums. The frequency of investment is usually weekly, monthly or quarterly. In SIPs, a fixed amount of money is debited by the investors in bank accounts periodically and invested in a specified mutual fund. The investor is allocated a number of units according to the current Net asset value. Every time a sum is invested, more units are added to the investors account.\n\nThe strategy claims to free the investors from speculating in volatile markets by dollar cost averaging. As the investor is getting more units when the price is low and fewer units when the price is high, in the long run, the average cost per unit is supposed to be lower.\n\nSIP claims to encourage disciplined investment. SIPs are flexible; the investors may stop investing a plan anytime or may choose to increase or decrease the investment amount. SIP is usually recommended to retail investors who do not have the resources to pursue the active investment.\n\n',
    },
  ),
  new Item(
    3,
    'One time Investment',
    'making a Lumpsum investment? Calculate the future value of your wealth',
    'https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg',
    [
      new InputModel('Investment Amount', NUMERIC_INPUT, null),
      new InputModel('Expected rate of return (P.A)', NUMERIC_INPUT, null),
      new InputModel('Tenure (in years)', NUMERIC_INPUT, null),
    ],
    {
      title: 'Lumpsum Investment',
      body: 'A lump sum investment is depositing the entire amount at one go. Lump-sum investment is a popular way of investing in mutual funds. If you invest the entire amount available with you in a mutual fund scheme, it is called the lump-sum mutual fund investment. Lump-sum investing is a common mode of investment for HNIs and big-ticket investors.\n\nIt is an excellent way of investing in the long-term. An investor who has a high-risk tolerance may consider investing a lump sum amount in a mutual fund scheme. You may consider lump-sum investment for a windfall such as an inheritance, bonus, or a gift. \n\nIf you get the market timing right, you may profit from the lump-sum investment. It is an ideal investment for the long-run. You must still invest based on your investment goals, risk appetite, and time horizon. Lump-sum investing is not suitable for short-term investment. \n\nIf you are not confident with handling large amounts of money, you may opt for a systematic investment plan or SIP that staggers investments over some time. It helps you avoid timing the market. Investing a lump sum amount of money depends on the need for funds. Failure to plan for liquidity could mean liquidating assets at a loss. \n\n',
    },
  ),
  new Item(
    4,
    'Goal Planning - Lumpsum',
    'Wish to invest once and make wealth? Calculate the Investment Amount',
    'https://images.pexels.com/photos/6620429/pexels-photo-6620429.jpeg',
    [
      new InputModel('Targeted Wealth', NUMERIC_INPUT, null),
      new InputModel('Expected rate of return (P.A)', NUMERIC_INPUT, null),
      new InputModel('Tenure (in years)', NUMERIC_INPUT, null),
      new InputModel('Adjust for Inflation?', DROPDOWN_INPUT, [
        {
          label: 'No',
          value: 0,
        },
        {
          label: 'Yes',
          value: 1,
        },
      ]),
    ],
    {
      title: 'Lumpsum Goal Planning',
      body: 'If you want to reach somewhere, you need to firstly know where you stand and the direction of your destination. In the same way, you need to analyse your current financial status, do financial planning and plan your future goals. Goals define your future needs. Goal planning helps you become financially secure and channelize your current financial investments in such a manner that it generates returns over a time period which fulfils your targeted goals.\n\nTo determine financial goals, one must prioritize the events of their life which will be requiring funds. It can be done by prioritizing based on importance of the event and then further categorizing it by time period in which it is going to occur. For example, retirement and child’s education planning should be given more weight than the vacation and buying of new car. Further classifying, if your child’s age is 2 years and your age is 50 years, then priority should be given first to retirement planning and after that to child’s education planning. \n\nWhat is the process of Financial Planning? \n\nPlanning your finances right is known as financial planning. Firstly, determine your current financial status that where you stand, how much money you have, etc. Then set up your long-term and short-term financial goals. You can use our SIP calculators as well. Once the goal is set then identify and evaluate the financial instruments you want to invest in and is suitable as per your risk profiling. Now implement your plan into action by starting the investment. You should periodically check the results of the plan and make changes if applicable. \n\n',
    },
  ),
  // new Item(
  //   5,
  //   'Step-Up Calculator',
  //   'Wish to increase your SIP Investment Amount annually? Calculate your returns',
  //   'https://images.pexels.com/photos/6858677/pexels-photo-6858677.jpeg',
  //   [
  //     new InputModel('Monthly Investment Amount', NUMERIC_INPUT, null),
  //     new InputModel('Growth % in Investment Amount(P.A)', NUMERIC_INPUT, null),
  //     new InputModel('Expected Return %(P.A)', NUMERIC_INPUT, null),
  //     new InputModel('Tenure (In Years)', NUMERIC_INPUT, null),
  //   ],
  //   "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  // ),
];
