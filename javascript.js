function myFunction() {
  var x = document.getElementById("nav-list");
  if (x.className === "header-list flex") {
    x.className = "responsive";
  } else {
    x.className = "header-list flex";
  }
    console.log(x.className)
}