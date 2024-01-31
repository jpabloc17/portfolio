const html = document.querySelector("html");
const body = document.querySelector("body");
const darkModeButton = document.querySelector("input");
const p = document.querySelectorAll("p");
const main = document.querySelector("main");
const header = document.querySelector("header");
const linkTags = header.querySelectorAll("a");
const name = header.querySelector("span");
const githubIcon = document.querySelectorAll(".github-icon");
const githubLink = document.querySelectorAll(".project-details a");
const footer = document.querySelector("footer");
const burguerButton = document.querySelector(".burguer-icon");
const mobileNavMenu = document.querySelector(".mobile-nav");

burguerButton.addEventListener("mouseenter", () => {
  mobileNavMenu.style.display = "block";
});
mobileNavMenu.addEventListener("mouseleave", () => {
  mobileNavMenu.style.display = "";
});

const navBgColor = "rgb(255, 72, 255)";

darkModeButton.onchange = function (e) {
  const value = e.target.checked;
  if (value) {
    html.style.backgroundColor = "white";
    body.style.opacity = "100%";
    // main.style.background = "white";
    header.style.backgroundColor = "black";
    header.style.color = "white";

    p.forEach((element) => (element.style.color = "black"));

    linkTags.forEach((element) => (element.style.color = "white"));

    name.style.color = "white";

    githubIcon.forEach((element) => {
      element.style.background = "black";
      element.style.borderRadius = "50px";
    });

    githubLink.forEach((element) => {
      element.style.borderColor = navBgColor;
      element.style.color = navBgColor;
    });
    footer.style.backgroundColor = "black";
  } else {
    html.style.backgroundColor = "";
    body.style.opacity = "";
    main.style.background = "";
    header.style.backgroundColor = "";
    header.style.color = "";
    p.forEach((element) => (element.style.color = ""));
    linkTags.forEach((element) => (element.style.color = ""));
    name.style.color = "";
    githubIcon.forEach((element) => {
      element.style.background = "";
      element.style.borderRadius = "";
    });
    githubLink.forEach((element) => {
      element.style.borderColor = "";
      element.style.color = "";
    });
    footer.style.backgroundColor = "";
  }
};
