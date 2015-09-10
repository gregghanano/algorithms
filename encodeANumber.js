
// encode(numberToEncode, numOfIterations)

// 1 -> 11 -> 21 -> 1211 -> 111221 -> 312211
// 554 -> 2514 -> 12151114
// 133 -> 1123 -> 211213

//take in number to encode,
// take in number of iterations
// return "talking number" so 1 is "one 1" or 11
// 1121

function encode(stringNum, iteration){
  if(iteration < 1){
    return stringNum;
  }
  //if its 112, we want to loop and count all of the 1's in sequential
  // order.
  var result = '';
  for(var i = 0; i < stringNum.length; i++){

    var counter = 0;
    var number = stringNum[i];
    //console.log('number = ' + number);
    while(stringNum[i] === stringNum[i+1]){
      counter++;
      i++;
    }
    counter++;
    //console.log('counter = ' + counter);
    result += counter+number;
  }
  return encode(result, iteration-1);
}

console.log(encode('554', 2)); // -> 12151114 
