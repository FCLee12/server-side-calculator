const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// This starts the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
  })

// will hold an array of calculations
  // these will be rendered to the DOM
  // will likely be attached as a value to a property in an object which will be sent back on a GET
let calculationHistory = [];

// this will be replaced by the result of the calculation below
let calculationTotal = 0;

// will be an array of objects
let resultObject = {};

app.get('/calculation', (req, res) => {
  // should appear in the server terminal
  console.log( 'GET request received' );

  // should reply with a response and the array of calculations
  res.send(resultObject);
});

// these functions will be called to do the calculation based on the operator stored in the object being POSTed

function addition( num1, num2 ) {
  let result = num1 + num2;
  return result
}

function subtraction( num1, num2 ) {
  let result = num1 - num2;
  return result
}

function multiplication(  num1, num2 ) {
  let result = num1 * num2;
  return result
}

function division( num1, num2 ) {
  let result = num1 / num2;
  return result
}

// checks if the operator received from the POST is +, -, *, or /
  // calls the associated function to do the calculation
  // stores the result in the global variable calculationTotal
function operatorChecker( num1, num2, operator ) {
  if( operator === '+' ) {
    calculationTotal = addition( num1, num2 );
  } else if( operator === '-' ) {
    calculationTotal = subtraction( num1, num2 );
  } else if( operator === '*' ) {
    calculationTotal = multiplication( num1, num2 );
  } else if( operator === '/' ) {
    calculationTotal = division( num1, num2 );
  }
}

app.post('/calculation', (req, res) => {
  console.log( 'POST request received', req.body );
  let firstInput = Number(req.body.input1);
  let secondInput = Number(req.body.input2);
  let theOperator = req.body.operator;

  // checking to make sure the values stored are the desired values
  console.log( 'this is the firstInput:', firstInput );
  console.log( 'this is the secondInput:',secondInput );
  console.log( 'this is theOperator:',theOperator );

  // this will store the calculation as a string to be pushed into the calculationHistory array later
  let calculationString = `${firstInput} ${theOperator} ${secondInput} = `;

  // converting the inputs to numbers for calculation
  firstInput = Number(req.body.input1);
  secondInput = Number(req.body.input2);

  // calling the operatorChecker to do the calculation
  operatorChecker( firstInput, secondInput, theOperator );
  console.log( 'this is the calculationTotal', calculationTotal );

  // this will add the calculationTotal to the calculationString
  calculationString += calculationTotal
  console.log( 'this is the calculation string that will be added to the calculationHistory array:', calculationString );

  // this will push the calculationString into the calculationHistory array
  calculationHistory.push(calculationString);
  console.log( 'this is the updated calculationHistory:', calculationHistory );

  // this should update the resultObject with the proper information to pull apart and render to the DOM on client-side
  resultObject = {
    result: calculationTotal,
    history: calculationHistory
  };
  console.log( 'this is resultObject:', resultObject );

  // should reply with a response and the array of
  res.sendStatus(201);
})