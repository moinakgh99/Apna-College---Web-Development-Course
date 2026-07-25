/*
    Q1. Create a new input and button element on the page using JavaScript only. Set the text of the button to "Click me".
*/

let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "Click Me !!";
let body = document.querySelector("body");
body.append(btn);
btn.append(input);



/*
Q2. Add the following attributes to the elements:

    Change the placeholder value of the input to "username".
    Change the id of the button to "btn".
*/

input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");



/*
    Q3. Access the button using querySelector and the button's id. Change the button's background color to blue and the text color to white.
*/

let button = document.querySelector("#btn");
button.classList.add("blue");   // class list ki styling me, class hi bnegi ...



/*
    Q4. Create an <h1> element on the page and set its text to "DOM Practice". Underline the text and change its color to purple.
*/

let h1 = document.createElement('h1');
h1.innerText = "DOM Practise";
// let body = document.querySelector('body');
h1.classList.add('h1Style');
body.append(h1);


/*
    Q5. Create a <p> tag on the page and set its text to "Apna College Delta Practice", where "Delta" is displayed in bold.
*/

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);