// Stack problem
//given a string that has (), [], {}, determine if it's balanced
// '()'
// '({[]})'
// ([)] - not balanced
// {{(}} - not balanced
// {}) - not balanced
// ()[] - balanced

// check the left symbol, and you keep pushing them into a new array
// once you hit a right hand symbol, you check if its opposite of the last item pushed
// into the array. if it is, then you pop it out of the array
// if the array is empty, its balanced.

//stack problem
var tests = [
  ['()', true],
  ['({[]})', true],
  ['(]', false],
  ['{{}', false],
  ['{})', false],
  ['()[]', true],
  ['(', false],
  [')', false],
  ['<>', true]
];

var leftToRight = {
  '(': ')',
  '{': '}',
  '[': ']',
  '<': '>'
}

var leftSymbols = Object.keys(leftToRight);

function checkBalance(string){
  var symbolsToBeChecked = [];
  for(var i = 0; i < string.length; i++){
    var character = string.charAt(i);

    if(leftSymbols.indexOf(character) >= 0){
      symbolsToBeChecked.push(character);

    } else {

      var key = symbolsToBeChecked.pop();
      if(leftToRight[key] != character){
        return false;
      }
    }
  }
  return symbolsToBeChecked.length === 0;
}

for(var i = 0; i < tests.length; i++){
  //tests[0] = ['()', true]
  var test = tests[i];
  var result = checkBalance(test[0]);
  if(result === test[1]){
    console.log(test + ' = it passes');
  } else {
    console.log('Expected checkBalance(' + test[0] + ') to be ' + test[1] + '. But it was ' + result+'.');
  }
}