//Burger

const Burger = document.querySelector("#Burger");
const Nav = document.querySelector("#nav-menu");

Burger.addEventListener("click", function () {
    Nav.classList.toggle("nav-menu-show");
});
 
//Typed text

let loading = new Typed (".loadingtext", {
  strings: ["Loading..."],
  typeSpeed: 100,
  backSpeed: 100, 
  loop: true,
})

//loader

const loader = document.querySelector("#loader")

window.addEventListener ("load", function () {
    setTimeout(() => {
        loader.style.display = "none"
    }, 5000);
})

//Animation on scroll










