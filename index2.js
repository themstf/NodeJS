const lodash = require('lodash');

const fs = require("fs");

const myPeople = [
  {name: "John Doe", age: 25},
  {name: "Jane Doe", age: 20},
  {name: "Jamie Doe", age: 36},
  {name: "Karen Bynum", age: 33},
  {name: "Steve Richadson", age: 41}
]

const newArrayMyPeople = lodash.orderBy(myPeople, ['age'], ['desc']);

console.log(newArrayMyPeople);

const oldestMyPeople = lodash.maxBy(newArrayMyPeople, "age");

console.log(
  `The oldest myPeople is ${oldestMyPeople.name} with ${oldestMyPeople.age} years of age`
);

const youngestMyPople = lodash.minBy(newArrayMyPeople, "age");

console.log(
  `The youngest avenger is ${youngestMyPople.name} with ${youngestMyPople.age} years of age`
);

const myRemainingPeople = lodash.remove(newArrayMyPeople, oldestMyPeople);

console.log(newArrayMyPeople);

console.log(myRemainingPeople);

newArrayMyPeople.push(
    {name:"Maxim Kort", age:22},
    {name:"Lorent Chris", age:22},
    {name:"Alessia Rogers", age:22}
    );

const groupedByAge = lodash.groupBy(newArrayMyPeople, myPeople => {
  return myPeople.age;
});

console.log(groupedByAge);

fs.writeFile("people.txt", "", err => {
  if (err) throw err;
});

newArrayMyPeople.forEach(myPeople => {
  fs.appendFile("people.txt", `${myPeople.name} is ${myPeople.age}\n`, err => {
    if (err) throw err;
    console.log("its written");
  });
});