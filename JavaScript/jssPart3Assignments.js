/*
    Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
    For example: for array [7, 9, 0, -2] and n = 3
    Print, [7, 9, 0]
*/

let arr = [7, 9, 0, -2];
console.log(arr.slice(0, 3));


/*
    Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
    For example: for array [7, 9, 0, -2] and n = 3
    Print, [9, 0, -2]
*/

let arrNew = [7, 9, 0, -2];
let n = arrNew.length;
console.log(arrNew.slice(n-3, n));


/*
    Qs3. Write a JavaScript program to check whether a string is blank or not.
*/

let str = "";
if(str.length === 0) console.log("String is empty");
else console.log("String is not empty");


/*
    Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
*/

let strNew = "Hello";
if(strNew[1] == strNew[1].toLowerCase()) console.log("Yes it is in lowercase");
else console.log("No it is not in lowercase");


/*
    Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
*/

let s = "    moinak ghosh    ";
console.log(s.trim());


/*
    Qs6. Write a JavaScript program to check if an element exists in an array or not.
*/

let a = [1, 2, 6, 7];
// console.log(a.includes(8));

if(arr.indexOf(7) != -1) console.log("Element exists");
else console.log("Element do not exists");
