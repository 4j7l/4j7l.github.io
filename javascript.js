var colorWell;
var defaultColor = "##000000";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var p = document.querySelector("h1");
  console.log(`changed color to ${event.target.value}` );
  console.log("")

  if (p) {
    p.style.color = event.target.value;
    console.log(`changed color to ${event.target.value}` );
    console.log("")
  }
}

function updateAll(event) {
  document.querySelectorAll("h1").forEach(function(p) {
    p.style.color = event.target.value;
    console.log(`changed color to ${event.target.value}` );
    console.log("")
  });
}