//Insertion sort

var arr = [5,4,1,9,2,10,7];
function insertionSort(array){
  var temp;
  for(var i = 1; i < array.length; i++){
    temp = array[i];
    for(var j = i; j > 0; j--){
      if(temp < array[j-1]){
        array[j] = array[j-1];
        if(j === 1){
          array[0] = temp;
        }
      } else {
        array[j] = temp;
        break;
      }
    }
  }
  return array;
}

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

function testInsertion(){
  for(var i = 0; i < testArrays.length; i++){
    var arrayInTest = testArrays[i];
    var answer = arrayInTest[1];
    var result = insertionSort(arrayInTest[0]);
    if(checkArrays(result, answer)){
      console.log('Test passed! Result was ' + result + ' and we expected ' + answer);
    } else {
      console.log('Test failed! Result was ' + result + ' and we expected ' + answer);
    }
  }
}
testSelection();
