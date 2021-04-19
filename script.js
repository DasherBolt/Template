function myFunction() {
  var x = document.getElementById("TheNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}