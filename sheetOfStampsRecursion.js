// Recursion problem


// For an NxM sheet of stamps, how many total tears does it take to split up
//    the sheet into all of its individual stamps? You are not allowed to pile up
//    strips of stamps and tear them together, you must hold only one rectangle of
//    stamps at a time and tear a straight line from end to end
// f(1,1) = 0
// f(0,0) = 0
// f(2, 1) = 1 tear
// f(1, 2) = 1
// f(3, 1) = 2
// f(4, 1) = 3

// f(2, 2) = 1 + f(1,2) + f(1,2);
// f(2, 3) = 1 + f(1, 2) + f(2, 2);
//         = 1 + 1 + 1 + f(1, 2) + f(1,2);
// f(4, 2) = 1 + f(1, 2) + f(3, 2);
// f(3, 3) = 1 + f(1, 3) + f(2, 3);
// f(2, 3) = 1 + f(1, 3) + f(1, 3);
// f(4, 3) = 1 + f(1, 3) + f(3, 3);
//base case, if n or m == 1; return m-1 or n-1;
//general case = f(m, n) = 1 + f(1, n) + f(m-1, n);

function stampsTears(m, n){
  if(n === 1){
    return m - 1;
  }
  if(m === 1){
    return n-1;
  }
  return 1 + stampsTears(1, n) + stampsTears(m-1, n);
}
console.log(stampsTears(2, 2));