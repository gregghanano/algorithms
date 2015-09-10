// find the minimum in an array, swap that minimum to the front, then go to the
// next index
// O(n2) time complexity 'quadratic'
// not-stable but easy to understand

var arr = [5,3,1,7,9,2,10,20,3,2];
function selectionSort(array){
  //loop through array, starting at index 0
  var temp;
  for(var i = 0; i < array.length-1; i++){
    // inner loop to find minimum
    var min = array[i]; // set min as the first integer in index
    var minIndex=i;

    for(var j = i; j < array.length; j++){
      if(array[j] < min){
        min = array[j];
        minIndex = j;
      }
    }
    // when minimum is found, swap it with index in outer loop
    temp = array[i];
    array[i] = min;
    array[minIndex] = temp;
  }
  return array;
}
console.log(selectionSort(arr));

//tests
var testArrays = [
  [[5,1,4,3,8,2],[1,2,3,4,5,8]],
  [[1,2,3,4,5], [1,2,3,4,5]],
  [[5,4,3,2,1],[1,2,3,4,5]],
  [[1,4,3,3,5],[1,3,3,4,5]],
  [[5,3,1,7,9,2,10,20,3,2],[1, 2, 2, 3, 3, 5, 7, 9, 10, 20]],
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

function testSelection(){
  for(var i = 0; i < testArrays.length; i++){
    var arrayInTest = testArrays[i];
    var answer = arrayInTest[1];
    var result = selectionSort(arrayInTest[0]);
    if(checkArrays(result, answer)){
      console.log('Test passed! Result was ' + result + ' and we expected ' + answer);
    } else {
      console.log('Test failed! Result was ' + result + ' and we expected ' + answer);
    }
  }
}
testSelection();
