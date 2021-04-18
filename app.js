let heldValue = null;
let heldOperation = null;
let nextValue= 0;

function setHeldOperation(operation) {
  if (heldOperation !==null) {
    heldValue = heldOperation(heldValue, nextValue);
  } else if (nextValue !== null ) {
    heldValue = nextValue;
  }
  nextValue = 0;
  heldOperation = operation;
}

$('.digits button').click( function () {
  nextValue =  nextValue + $(this).text();
  updateDisplay();
});


function showValue(location, value) {
  if (value === null) {
    return $(location).text('') ;
  } else {
    return $(location).text(Number (value));
  } console.log(showValue())
};


function updateDisplay() {
  showValue($('.held-value'), heldValue);
  showValue($('.next-value'), nextValue);
}

function add(x, y){
  return Number(x) + Number(y);
}

$('.add').click( function () {
  setHeldOperation(add);
  $('.next-operation').text('+');
  updateDisplay();
});

function subtract(x, y){
  return Number(x) - Number(y);
}

$('.subtract').click( function () {
  setHeldOperation(subtract);
  $('.next-operation').text('-');
  updateDisplay();
});

function multiply(x, y){
  return Number(x) * Number(y)
}

$('.multiply').click( function () {
  setHeldOperation(multiply);
  $('.next-operation').text('x');
  updateDisplay();
});

function divide(x, y){
  return Number(x) / Number(y)
}

$('.divide').click( function () {
  setHeldOperation(divide);
  $('.next-operation').text('/');
  updateDisplay();
});


$('.equals').click( function () {
  setHeldOperation(null);
  $('.next-operation').text('');
  updateDisplay();
});


function clearAll() {
  heldValue = null;
  heldOperation = null;
  nextValue= 0;
  $('.next-operation').text('');
}

$('.clear-all').click(function() {
  clearAll(), updateDisplay()});;

function clearEntry() {
  nextValue= 0;
}


$('.clear-entry').click( function() {
  clearEntry(), updateDisplay()});