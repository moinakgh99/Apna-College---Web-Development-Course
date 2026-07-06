/*
    Q1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
*/

let arr = [1, 2, 3, 4, 5, 6];
let arrayAverage = (avg) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  console.log(avg);
};
arrayAverage(arr);

/*
    Q2.Write an arrow function named isEven() that takes a single number as an argument and returns whether it is even or not.
*/

let isEven = (n) => {
  if (n % 2 == 0) console.log("It is Even");
  else console.log("It is Odd");
};
isEven(11);

/*
    What is the output of the following code?  
*/

const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000); // output : undefined

/*
    correct version : 
    const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
    },
    };

    setTimeout(() => object.logMessage(), 1000);
*/

/*
    What is the output of the following code?
*/

let length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2);  // undefined