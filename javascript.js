function myFunction() {
  var x = document.getElementById("nav-list");
  if (x.className === "header-list") {
    x.className = "responsive";
  } else {
    x.className = "header-list";
  }
    console.log(x.className)
}