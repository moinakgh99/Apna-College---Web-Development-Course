let btns = document.querySelectorAll("button");
// console.dir(btn);  -> saari properties aa jaayegi !!!

function sayHello() {
  console.log("Hello");
}

function sayApna() {
  console.log("Hello !! Fom apna College !!");
}

for (btn of btns) {

  // btn.onclick = sayHello; // click krne p kuch trigger hoga !!
  // btn.onmouseenter = function hello() {
  //   console.log("entered the button !!");  // simple button p jaaka function execute ho jaaega !!
  // };


  // multiple function calls execute krne k lia ...
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayApna);
}

// btn.onclick = sayHello;

// btn.onclick = function () {
//     console.log("Button is clicked !!");
// }
