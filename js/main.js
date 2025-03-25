document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navItems = header.querySelectorAll("nav a");
  const button = header.querySelector("nav .getintouch");
  const logo = header.querySelector("header #logo span");

  if (window.scrollY >= 790) {
    navItems.forEach((item) => {
      item.style.color = "black"; 
    });
    button.style.color = "white"; 
    button.style.backgroundColor = "#b06c78"; 
    logo.style.color = "black";
  } else {
    navItems.forEach((item) => {
      item.style.color = ""; 
    });
    button.style.color = "#000"; 
    button.style.backgroundColor = ""; 
    logo.style.color = "";
  }
});
