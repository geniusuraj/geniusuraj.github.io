document.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.getElementById('nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    function hideMenu() {
        nav.classList.remove('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });
});
