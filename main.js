// alert('hello world');
const hamburger = document.getElementById('hamburger');

const nav = document.getElementById('nav__list');

hamburger.addEventListener("click", ()=> {
    nav.classList.hamburger("active");
});
