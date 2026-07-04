/*
    Q1. Write a JavaScript function that returns array elements larger than a given number.
*/

let arr = [10,20,30,40,50,60];
function larger(arr, nums) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > nums) console.log(arr[i]);        
    }
}

larger(arr,30);


/*
    Write a JavaScript function to extract unique characters from a string.

    Example: str = "abcdabcdefgggh"
    Output: "abcdefgh"
*/

let str = "abcdabcdefgggh";
function unique(str) {
    let res = "";
    for(let i = 0; i < str.length; i++) {
        if(res.indexOf(str[i]) == -1) res += str[i];
    }
    return res;
}

console.log(unique(str));


/*
    Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

`    Example: country = ["Australia", "Germany", "United States of America"]

    Output: "United States of America"`
*/

let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
    let length = 0, res = "";
    for(let i = 0; i < country.length; i++) {
        if(country[i].length > length) {
            length = country[i].length;
            res = country[i];
        }
    }
    return res;
}

console.log(longestName(country));


/*
    Write a JavaScript function to count the number of vowels in a string argument.
*/

let strNew = "Moinak Ghosh";
function countVowels(str) {
    let c = 0;
    for(let i = 0; i < strNew.length; i++) {
        if(strNew[i] == 'a' || strNew == 'A') c++;
        if(strNew[i] == 'e' || strNew == 'E') c++;
        if(strNew[i] == 'i' || strNew == 'I') c++;
        if(strNew[i] == 'o' || strNew == 'O') c++;
        if(strNew[i] == 'u' || strNew == 'U') c++;
    }
    return c;
}

console.log(countVowels(str));


/*
    Write a JavaScript function to generate a random number within a given range (start, end).
*/

let random = function(start, end) {
    return Math.floor(Math.random() * end) + 1;
}

console.log(random(1, 100));
