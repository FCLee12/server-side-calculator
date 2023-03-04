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

    // listener for the clear button
    $('#clear').on('click', clearInputs)

    // listener for the operator buttons
        // remember to use $(this) to grab the text from the button
    $('.operatorBtn').on('click', useOperator)

    // initial GET request to populate the page
    getResult()
}

// collects the operator text from an operator button press
    // will be called in the POST to set value in object to be passed in POST data section
function useOperator() {
    theOperator = $(this).text();
    console.log( 'this is theOperator:', theOperator );
}

// this function will clear the input fields of the form
function clearInputs() {
    $('#input1').val('');
    $('#input2').val('');
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
        render(response);
    }).catch((response) => {
        alert('GET request failed')
    })
}

// this will be the POST request
function addCalculation() {
    console.log( 'addCalculation running' );
    calculateThese()
    
    if( firstInput == '' || secondInput == '' ) {
        alert('Please enter a number in both input fields.')
    } else {
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
}

// expecting an object as the argument
    // should add the result property to the #mathResult
    // should add the history property to the #showWork
function render( response ) {
    console.log( 'render running' );
    console.log( response.result );
    console.log( response.history );
    $('#mathResult').empty();
    $('#showWork').empty();

    $('#mathResult').append(`
        <h2>${response.result}</h2>
    `)

    for( let calculation of response.history ) {
        $('#showWork').append(`
            <li>${calculation}</li>
        `)
    }
}