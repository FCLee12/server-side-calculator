console.log( 'JS ready' );

$(document).ready( onReady );

function onReady() {
    console.log( 'jQuery ready' );

    // listener for the equals button
        // should function like a submit button
    $( '#solve' ).on('click', calculateThis)

    // listener for the operator buttons
        // remember to use $(this) to grab the text from the button
    $('.operatorBtn').on('click', useOperator)
}

function useOperator() {
    let theOperator = $(this).text();
    console.log( theOperator );
}

function calculateThis() {
    // collecting all inputs from the form
    let firstInput = $('#input1').val();
    let secondInput = $('#input2').val();

    console.log( firstInput );
    console.log( secondInput );
}