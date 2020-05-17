var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
console.log(color1.value);

color1.addEventListener("input", function () {
  document.querySelector("body").style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function () {
  document.querySelector("body").style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})
