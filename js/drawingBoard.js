shape = "circle";
color = "red";

function shapeButton(shapeArg, button) {
  shape = shapeArg;
  var elements = document.getElementsByClassName("shape-button");
  for (let element of elements) {
    element.classList.remove("picked");
  }
  button.classList.add("picked");
}

function changeColor(colorArg, button) {
  color = colorArg;
  var elements = document.getElementsByClassName("color-button");
  for (let element of elements) {
    element.classList.remove("picked");
  }
  var elements = document.getElementsByClassName("shape-button");
  for (let element of elements) {
    element.style.color = colorArg;
  }
  button.classList.add("picked");
}

function toggleColors(btn) {
  document.getElementById("red").classList.toggle("active");
  document.getElementById("green").classList.toggle("active");
  document.getElementById("blue").classList.toggle("active");
  document.getElementsByClassName('arrow')[0].classList.toggle("rotate");
}
