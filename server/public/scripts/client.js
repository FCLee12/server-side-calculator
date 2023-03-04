console.log( 'JS ready' );

$(document).ready( onReady );

// variables being sent in POST
let theOperator = '';
let firstInput = 0;
let secondInput = 0;

function onReady() {
    console.log( 'jQuery ready' );

    // listener for the equals button
        // should function like a submit button
    $( '#solve' ).on('click', addCalculation)

    // listener for the operator buttons
        // remember to use $(this) to grab the text from the button
    $('.operatorBtn').on('click', useOperator)
    getResult()
}

// collects the operator text from an operator button press
    // will be called in the POST to set value in object to be passed in POST data section
function useOperator() {
    theOperator = $(this).text();
    console.log( 'this is theOperator:', theOperator );
}

// will be called in the POST to set value in object to be passed in POST data section
function calculateThese() {
    // collecting all inputs from the form
    firstInput = $('#input1').val()
    secondInput = $('#input2').val()

    console.log( 'this is the firstInput:', firstInput );
    console.log( 'this is the secondInput:', secondInput );
}


// this will be the GET request
function getResult() {
    console.log( 'getResult running' );
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then((response) => {
        console.log( 'this should be an object with result and array of calculations', response );
    }).catch((response) => {
        alert('GET request failed')
    })
}

// this will be the POST request
function addCalculation() {
    console.log( 'addCalculation running' );

    calculateThese()

    // this object will be sent in the POST request
        // input1 collected from input field 
    let theCalculation = {
        input1: firstInput,
        input2: secondInput,
        operator: theOperator 
    }

    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: theCalculation
    }).then((response) => {
        console.log( 'POST request successful' );
        // this GET request will be to update the DOM
        getResult()
    }).catch((response)=> {
        alert('POST request failed')
    })
}