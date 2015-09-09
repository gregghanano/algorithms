var array = [5,1,4,3,8,2];

function bubbleSort(array){
  var swap;
  do{
    swap = false;
    for(var i = 0; i < array.length-1; i++){
      if(array[i] > array[i +1]){
        //swap here!
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        swap = true;
      }
    }
  }while(swap);
  return array;
}

//tests for the sort
var testArrays = [
  [[5,1,4,3,8,2],[1,2,3,4,5,8]]
  [[1,2,3,4,5], [1,2,3,4,5]],
  [[5,4,3,2,1],[1,2,3,4,5]],
  [[1],[1]],
  [[14,108,31,2000,2,1,753,12,8],[1,2,8,12,14,31,108,753,2000]]
];

function checkArrays(result, answer){
  if(result.length !== answer.length){
    return false;
  }
  for(var i = 0; i < result.length; i++){
    if(result[i] !== answer[i]){
      return false;
    }
  }
  return true;
}

function testBubble(){
  for(var i = 0; i < testArrays.length; i++){
    var arrayInTest = testArrays[i];
    var answer = arrayInTest[1];
    var result = bubbleSort(arrayInTest[0]);
    if(checkArrays(result, answer)){
      console.log('Test passed! Result was ' + result + ' and we expected ' + answer);
    } else {
      console.log('Test failed! Result was ' + result + ' and we expected ' + answer);
    }
  }
}
testBubble();
