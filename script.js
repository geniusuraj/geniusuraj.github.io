const nav = document.getElementById('nav-menu');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
