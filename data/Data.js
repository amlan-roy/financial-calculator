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

export default DATA = [
  new Item(
    1,
    'EMI calculator',
    'Wish to calculate the monthly EMI of your loan? Calculate here.',
    'https://via.placeholder.com/150.png',
    ['Loan Amount', 'Loan Tenure', 'Interest Rate(P.A)'],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
  new Item(
    2,
    'SIP calculator',
    'Wish to invest periodically? Calculate the amount of wealth that you can generate',
    'https://via.placeholder.com/150.png',
    [
      'Investment Amount',
      'Expected rate of return (P.A)',
      'Tenure (in years) ',
    ],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
  new Item(
    3,
    'One time Investment',
    'making a Lumpsum investment? Calculate the future value of your wealth',
    'https://via.placeholder.com/150.png',
    ['Investment Amount', 'Expected rate of return (P.A)', 'Tenure (in years)'],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
  new Item(
    4,
    'Goal Planning - Lumpsum',
    'Wish to invest once and make wealth? Calculate the Investment Amount',
    'https://via.placeholder.com/150.png',
    ['Targeted Wealth', 'Expected rate of return (P.A)', 'Tenure (in years)'],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
  new Item(
    5,
    'Step-Up Calculator',
    'Wish to increase your SIP Investment Amount annually? Calculate your returns',
    'https://via.placeholder.com/150.png',
    [
      'Monthly Investment Amount',
      'Growth in Investment Amount(P.A)(in %)',
      'Expected Return(P.A)(in %)',
      'Tenure(In Years)(Up to 50 years)',
    ],
    "Congratulations, you've reached the end of our first JS objects article — you should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that objects are very useful as structures for storing related data and functionality — if you tried to keep track of all the properties and methods in our person object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.",
  ),
];
