// Problem 4:
// Find the Kth smallest element in an unsorted array
//
// Input: Unsorted Array, K
// Output: Kth smallest element in the array
//
// Time Complexity: O(nlogn) but O(n) is achievable
// Space Complexity: N/A
//
// Ex.
// Input: arr = [7, 10, 4, 3, 20, 15] , k = 3
// Output: 7
//
// Input: arr = [7, 10, 4, 3, 20, 15] , k = 4
// Output: 10
function kthSmallestSlow(array, k){
  //nlogn tells us we need to mergeSort the array;
  function mergeSort(array){
    if(array.length < 2){
      return array;
    }
    var middle = Math.floor(array.length/2);
    var left = mergeSort(array.slice(0,middle));
    var right = mergeSort(array.slice(middle, array.length));
    var i = 0;
    var j = 0;
    var output = [];
    while(i < left.length && j < right.length){
      if(left[i] <= right[j]){
        output.push(left[i]);
        i++;
      } else {
        output.push(right[j]);
        j++;
      }
    }
    if(i >= left.length){
      output = output.concat(right.slice(j));
    } else if (j >= right.length) {
      output = output.concat(left.slice(i));
    }
    return output;
  }
  var newArray = mergeSort(array);
  return newArray[k-1];
}

function kthSmallestLinear(array, k){
  //linear times tells us we need to loop through array once. we can
  // use a queue
  var queue = [];
  var min = array[0];
  queue.push(min);
  for(var i = 1; i < array.length; i++){
    if(queue.length < k){
      if(array[i] > min){
        queue.push(array[i]);
      } else {
        min = array[i];
        queue.unshift(array[i]);
      }
    } else {
      if(array[i] < min){
        queue.unshift(array[i]);
        queue.pop();
      }
    }
  }
  return queue[queue.length-1];
}
