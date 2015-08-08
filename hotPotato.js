// Queue problem

// playing Hot Potato, everybody sits in a circle and pass a potato n times
// person that has the potato at the end of n passes is eliminated
// keep playing until 1 person is left
// that person wins
// given an array with names ['Alice', 'Bob', 'Tim', 'Sally'] and n number of passes
// determine the winner

//n = 1
// var array = ['Bob', 'Tim', 'Sally', 'Alice']

function hotPotato1turn(people, passes){
  for(var i = 0; i < passes-1; i++){
    var passer = people.shift();
    people.push(passer);
  }
  people.shift();
  return people;
}

function hotPotatoWinner(people, passes){
  if(people.length === 1){
    return people[0];
  } else {
    return hotPotatoWinner(hotPotato1turn(people, passes), passes);
  }
}