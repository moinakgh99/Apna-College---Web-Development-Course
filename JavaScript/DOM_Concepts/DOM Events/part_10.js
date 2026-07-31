/*
    Q1. Try out the following events in addEventListener() on your own:

    mouseout
    keypress
    scroll
    load

    Note: Use the MDN (Mozilla Developer Network) documentation for help.
*/

// mouseout event .....
let text = document.querySelector("#test");

text.addEventListener("mouseout", function (e) {
  e.target.style.color = "yellow";
  setTimeout(() => {
    e.target.style.color = "";
  }, 500);
  console.log("Mouse is out");
});

text.addEventListener("mouseleave", function (e) {
  e.target.style.color = "white";
  setTimeout(() => {
    e.target.style.color = "";
  }, 1000);
  console.log("Mouse leaves");
});

// keypress event ...
let input = document.querySelector("input");
let para = document.querySelector("p");

input.addEventListener("keypress", function (e) {
  console.log("key is pressed");

  para.innerText += e.code;
});

// scroll event ...
let p = document.querySelector("#scroll");
let div = document.querySelector("#box");
window.addEventListener("scroll", function () {
  p.innerText = "Now scrolling !!!!";
  div.style.backgroundColor = "green";
});

// load event ...
window.addEventListener("load", function () {
  console.log("Window is loaded !!");

  alert("Window is fully loaded !!");
});


/*
    Q2. Create a button using JavaScript

    Create a button on the webpage using JavaScript.

    Then, add an event listener to the button such that:

    When the button is clicked, its background color changes to green.
*/

let button = document.querySelector("button");
button.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    setTimeout(() => {
        this.style.backgroundColor = "";
    }, 1000);
})


/*
    Q3. Create an Input Field and Dynamic Heading
    HTML Requirements:
    Create an <input> element with the placeholder:
    Enter your name
    Create an <h2> heading on the page.
    Functionality:
    The input field is meant for entering a user's name.
    Therefore, it should allow only:
    Uppercase letters (A–Z)
    Lowercase letters (a–z)
    Spaces ( )
    Any other characters (numbers, symbols, special characters, etc.) should not be accepted.
    As the user types, the entered name should be displayed dynamically inside the <h2> heading.
    Important Note:

    The heading should display only valid characters (letters and spaces). Any invalid character should not appear in the heading.
*/

let h1 = document.querySelector("#ques3");
let inp = document.querySelector("#name");

inp.addEventListener("input", function() {
    let filter = inp.value.replace(/[^a-zA-Z ]/g, "");
    h1.innerText = filter;
})