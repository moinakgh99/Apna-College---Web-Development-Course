/*
    Q1. Square and sum the array elements using the arrow function and then find the average of the array.
*/

let num = [1, 2, 3, 4];
let sqNumber = num.map((n) => n * n);
console.log(sqNumber);

let sum = sqNumber.reduce((acc, res) => acc + res);
console.log(sum);

let avg = sum / num.length;
console.log(avg);

/*
    Q2.Create a new array using the map() function whose each element is equal to the original element plus 5.
*/

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((n) => n + 5);
console.log(newArr);

/*
    Q3. Create a new array whose elements are in uppercase of the words present in the original array.
*/

let str = ["moinak", "sonu", "chunnu"];
let newStr = str.map((str) => str.toUpperCase());
console.log(newStr);

/*
    Q4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
    The function should return a new array with the original array values and all of the additional arguments doubled.
*/

let array = [1, 2, 3, 4, 5, 7, 8];
let doubleAndReturnArgs = (array, ...args) => {
  let newArray = args.map((n) => n * 2);
  return [...array, newArray];
};

console.log(doubleAndReturnArgs(array, 10, 20, 30));

/*
    Q5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

let object = {
  name: "Moinak",
  age: 21,
  College : "ABES ENGINEERING COLLEGE"
};

let newObject = {
    newName : "Hitesh",
    city: "Mumbai",
    Country : "India"
};

let mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(mergeObjects(object, newObject));
