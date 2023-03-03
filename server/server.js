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
let calculationHistory = [ '1+3', '1+4', '3+4' ];

// will be an array of objects
let resultObject = {
  result: 'RESULTNUMBER',
  history: calculationHistory
};

app.get('/calculation', (req, res) => {
  // should appear in the server terminal
  console.log( 'GET request received' );

  // should reply with a response and the array of calculations
  res.send(resultObject);
});

app.post('/calculation', (req, res) => {
  console.log( 'POST request received', req.body );

  // should reply with a response and the array of
  res.sendStatus(201);
})