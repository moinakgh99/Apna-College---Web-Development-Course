let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // default behaviour prevent krane k lia ....
  console.dir(form);

  // Another way of writing ..
//   let user = document.querySelector("#user"); // form.elements[0]  or   this.elements[0];
//   let pass = document.querySelector("#pass"); // form.elements[1]  or   this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);
//   console.log(`Hi ${user.value}, your password is ${pass.value}`);

//   console.log("Form is submitted");
});

let user = document.querySelector("#user");

// final - initial change -> overall change
user.addEventListener("change", function () {
  console.log("Change occured");
  console.log("Final Value is", this.value);
});

// initial changes -> individual changes occurs
user.addEventListener("input", function () {
  console.log("input changed");
  console.log("Final Value is", this.value);
});

