// Problem:
// Merge Sort
//
// Prompt:
// Given an unsorted array of numbers, return a sorted array using merge sort.
// What is the space and time complexity of your algorithm?
//
// Input:
// Array of integers
//
// Output:
// Sorted Array of integers

function mergeSort(array){
  //1. split each element into partitions of size 1.
  if(array.length < 2){
    return array;
  }
  var middle = Math.floor(array.length/2);
  var left = mergeSort(array.slice(0, middle));
  console.log("left = " + left);
  var right = mergeSort(array.slice(middle, array.length));
  console.log("right = " + right);

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
  console.log("output before if = " + output);
  if(i >= left.length){
    output = output.concat(right.slice(j));
  } else if (j >= right.length){
    output = output.concat(left.slice(i));
  }
  console.log("output = " + output);
  return output;

}
var answer = mergeSort([1,10,23,9,2,5,7,20,6]);
console.log(answer);
