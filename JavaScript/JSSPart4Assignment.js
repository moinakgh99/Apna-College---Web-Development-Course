/*
    Write a JavaScript program to delete all occurrences of element 'num' in a given array.
    arr = [1, 2, 3, 4, 5, 6, 2, 3]
    num = 2
    Result : arr = [1, 3, 4, 5, 6, 3]
*/

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) continue; // arr.splice(i, 1);
  console.log(arr[i]);
}

/*
    Write a JavaScript program to find the number of digits in a number.
    number = 287152
    count = 6
*/

let number = 287152;
let c = 0;
while (number > 0) {
  c++;
  number = Math.floor(number / 10); // to remove decimal part
}
console.log(c);

/*
    Write a JavaScript program to find the sum of digits in a number.

    Example:

    number = 287152
    sum = 25
*/

let num1 = 287152;
let sum = 0;
while (num1 > 0) {
  let dig = num1 % 10;
  sum += dig;
  num1 = Math.floor(num1 / 10);
}
console.log(sum);

/*
    Print the factorial of a number n.
*/

let dig = 6;
let fib = 1;
while (dig > 0) {
  if (dig == 0) return 1;
  fib = fib * dig;
  dig--;
}
console.log(fib);

/*
    Find the largest number in an array containing only positive numbers.
*/

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = 0;
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] > max) max = arr1[i];
}
console.log(max);
