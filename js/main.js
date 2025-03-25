document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const headerContainer = document.querySelector(".header-container");
  
  const navItems = header.querySelectorAll("nav a");
  const button = header.querySelector("nav .getintouch");
  const logo = header.querySelector("header #logo span");

  if (window.scrollY >= 790 ) {
    navItems.forEach((item) => {
      item.style.color = "black";
    });
    headerContainer.style.backgroundColor = "#fef3e5";
    header.style.backgroundColor = "#fef3e5";
    button.style.color = "white";
    button.style.backgroundColor = "#b06c78";
    logo.style.color = "black";
  } else {
    navItems.forEach((item) => {
      item.style.color = "";
    });
     headerContainer.style.backgroundColor = "";
     header.style.backgroundColor = "";
    button.style.color = "#000";
    button.style.backgroundColor = "";
    logo.style.color = "";
  }
});
