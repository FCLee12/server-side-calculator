console.log( 'JS ready' );

$(document).ready( onReady );

// variables being sent in POST
let theOperator = '';
let firstInput = 0;
let secondInput =0;

function onReady() {
    console.log( 'jQuery ready' );

    // listener for the equals button
        // should function like a submit button
    $( '#solve' ).on('click', calculateThese)

    // listener for the operator buttons
        // remember to use $(this) to grab the text from the button
    $('.operatorBtn').on('click', useOperator)
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
    firstInput = $('#input1').val();
    secondInput = $('#input2').val();

    console.log( 'this is the firstInput:', firstInput );
    console.log( 'this is the secondInput:', secondInput );
}