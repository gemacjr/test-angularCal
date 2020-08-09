import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

let str = "Brunch locavore letterpress, tilde tbh gluten-free drinking vinegar master. cleanse cronut chicharrones prism. DIY gastropub VHS crucifix! direct trade try-hard air plant XOXO ";

// let wordArray = str.split(' ', 4);
//let wordArray = str.split(",");

//let wordArray = str.split();

let regexDisplay = str.split(/[,.]|!/)
console.log(regexDisplay)

let strArray = [...str]

// console.log(strArray)

Array.isArray(strArray)

// Accessing Characters in a String

let str2 = "";

for (let val of str) {
  if (val === 't'){
    str2 += val.toUpperCase();
  } else {
    str2 += val;
  }
}

// console.log("My output " + str2);

// console.log(str[1]);

// let str3 ='';

// for (let i = 0; i < str.length; i++){
//   if (str[i] === str[i].toLowerCase()){
//     str3 += str[i].toUpperCase()
//   } else {
//     str3 += str[i];
//   }
// }

// console.log(str3)







// let arrDemo = [1,2,3];

// let objDemo = {
//   length: 4,
//   1: 'one',
//   2: 'two',
//   3: 'three'
// };

// // for (let val of objDemo){
// //   console.log(val);
// // }
// Array.isArray(arrDemo);


// let map = new Map();
// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');

// for (let val of map){
//   console.log(val);
// }

//Convert to an Array
// ... spread operator makes things iterable converts to an array
// let mapArray = [...map];

// let mapArray2 = Array.from(map)// same as spread array

// console.log(mapArray2)

// let objArray = Array.from(objDemo)
// console.log(objDemo)


// console.log(map);


    let year = []

let monthOne = [];
let monthTwo = [];
let monthThree = []; // maybe 12??

let date = new Date();
let isSelectedBool = true;
let isPastBool = false;
let isDefaultBool = false;

let day = {date: date, isSelected: isSelectedBool, isPast: isPastBool, isDefaultBool}

let weekOne = [];
let weekTwo = [];
let weekThree = [];
let weekFour = [];
let weekFive = [];
let weekSix = [];

weekOne = Array(7).fill(day);
weekTwo = Array(7).fill(day);
weekThree = Array(7).fill(day);
weekFour = Array(7).fill(day);
weekFive = Array(7).fill(day);
weekSix = Array(7).fill(day);
// first day of month would be the array location

monthOne = [weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix]
monthTwo = [weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix]
monthThree = [weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix]
year = [monthOne, monthTwo, monthThree]

//console.log(" This month one " + JSON.stringify(year));
//console.log("The date element for row 0 " + year[0][0][0].date)

let arr1 = [1, 2, 3, 4, true, "array", { one: 1}, [3, 5]]

let arr2 = [];
arr2.pop()

//console.log(arr1.push(3));

//console.log(arr1)

// unshift shift used for items at start of array

let arr = [3, 15, 25, 6, 8, 12];

for( let i = 0; i < arr.length; i++){
  arr[i] *= 5
}

let students = ["Steven", "Lori", "james", "lynette", "Arianna", "McKay", "witney"];

let lStudents = [];

for(let i = 0; i < arr.length; i++){
  
  //lStudents.push(students[i].toLowerCase());

  lStudents[i] = students[i].toLowerCase();
}
//console.log(lStudents)



//console.log(arr)

// for in loop is for Objects
let arr3 = [3, 15, 25,6, 8, 12];


let obj = { "date": "one"}
for (let key in obj) {
  //console.log(key); //"he"
  //console.log(obj[key]) // one
}

let total = 0;

// no index for forof loop
for ( let val of arr3){

  // console.log(val);

  total += val;
  //console.log(val)
}

  }

}


