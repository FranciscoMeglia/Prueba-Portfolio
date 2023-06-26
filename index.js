const btnNav = document.getElementById("btnNav")
const nav = document.getElementById("nav")
const down = document.getElementById("down")
const home = document.getElementById("home")
const html = document.body

btnNav.addEventListener("click" , () => {

    nav.classList.toggle("navMobile")

    if (nav.classList.contains("navMobile")) {
        btnNav.src = "https://cdn0.iconfinder.com/data/icons/zondicons/20/close-256.png"
        document.body.style.overflow = "hidden"
        down.style.display = "none"
    } else {
        btnNav.src = "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/menu-256.png"
        document.body.style.overflowY = "scroll"
        down.style.display = "flex"
    }
 
})

function navigation() {
    nav.classList.remove("navMobile")
    document.body.style.overflowY = "scroll"
    btnNav.src = "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/menu-256.png"
  
    const links = document.querySelectorAll(".links")
  
    links.forEach(function (link) {
      const targetId = link.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
      targetElement.scrollIntoView({ behavior: "smooth" })
    });
  };

  // SCROLL BEHAVIOR:
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // if the element is in the viewport
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0";
      }
    });
  });

const elemento1 = document.querySelector(".about");
const elemento2 = document.querySelector(".skills");
const elemento3 = document.querySelector(".form");
const elemento4 = document.querySelector(".footer");


// OBSERVED ELEMENTS:

observer.observe(elemento1);
observer.observe(elemento2);
observer.observe(elemento3)
observer.observe(elemento4)


