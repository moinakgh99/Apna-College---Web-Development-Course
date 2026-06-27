/*
    Create a number variable num with some value. Now, print "good" if the number is divisible by 10, and print "bad" if it is not.
*/

let dig = 90;
if (dig % 10 === 0) console.log("Good");
else console.log("Bad");

/*
    Take the user's name and age as input using prompts. Then, display the following message as an alert (by substituting the user's name and age):
*/

let firstName = prompt("Enter the first name : ");
let lastName = prompt("Enter the last name : ");
let age = prompt("Enter the age : ");

let err = alert(firstName + " " + lastName + " " + age);
console.log(err);
alert(`${firstName} ${lastName} is ${age} nyears old.`);

/*
    Write a switch statement to print the months in a quarter.

    Use the quarter number as the case value.

    Quarter 1: January, February, March
    Quarter 2: April, May, June
    Quarter 3: July, August, September
    Quarter 4: October, November, December
*/

let quarter = 2;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;

  default:
    console.log("Wrong quarter");
    break;
}

/*
    A string is called a golden string if:

    It starts with the character 'A' or 'a', and
    Its total length is greater than 5.

    Given a string, determine whether it is a golden string or not, and print the result.
*/

let str = "anaconda";
if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  console.log("Golden String");
} else {
  console.log("Not a Golden String");
}

/*
    Write a program to find the largest of 3 numbers.
*/

let a = 5,
  b = 3,
  c = 1;
if (a > b && a > c) console.log("A is greater");
else if (b > a && b > c) console.log(" is greater");
else console.log("C is greater");

/*
    Write a program to check whether two numbers have the same last digit.
*/

let dig = 32,
  secDigit = 47852;
if (dig % 10 === secDigit % 10)
  console.log("Two numbers have the same last digit");
else console.log("Two numbers do not have the same last digit");
