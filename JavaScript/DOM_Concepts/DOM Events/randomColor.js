let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  h3.innerText = getRandomColor();

  let div = document.querySelector("div");
  div.innerText = `Background color is changed to ${h3.innerText}`;
  div.style.backgroundColor = h3.innerText;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
