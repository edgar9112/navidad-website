let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
searchBtn.onclick = () => { 
    searchBtn.classList.toggle('fas fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fas fa-times');
    navbar.classList.remove('active');

}
menu.onclick = () => { 
    menu.classList.toggle('fas fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fas fa-times');
    searchForm.classList.remove('active');
}
let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next() {
    slides[index].classList.remove('active');
    index=(index +1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index=(index -1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}