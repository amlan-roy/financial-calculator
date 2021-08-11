class Item {
  constructor(id, title, description, imageUrl, inputs, detailedData) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.inputs = inputs;
    this.detailedData = detailedData;
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
      new InputModel('Loan Tenure', NUMERIC_INPUT, null),
      new InputModel('Interest Rate(P.A)', NUMERIC_INPUT, null),
    ],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
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
      new InputModel('Tenure (in years)', NUMERIC_INPUT, null),
    ],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
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
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
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
    ],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
  new Item(
    5,
    'Step-Up Calculator',
    'Wish to increase your SIP Investment Amount annually? Calculate your returns',
    'https://images.pexels.com/photos/6858677/pexels-photo-6858677.jpeg',
    [
      new InputModel('Monthly Investment Amount', NUMERIC_INPUT, null),
      new InputModel('Growth % in Investment Amount(P.A)', NUMERIC_INPUT, null),
      new InputModel('Expected Return %(P.A)', NUMERIC_INPUT, null),
      new InputModel('Tenure (In Years)', NUMERIC_INPUT, null),
    ],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
];
