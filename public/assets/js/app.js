document.addEventListener('DOMContentLoaded', function () {
    
    const mobileNav = document.querySelector('#mobileNav');
    const navbarWrapper = document.querySelector('#navbarWrapper');
    const enlaces = document.querySelector('#navbarWrapper nav');
    const icono = document.querySelector('#icono');

    mobileNav.addEventListener('click', () => {
        icono.classList.toggle('fa-times')
        navbarWrapper.classList.toggle('mobileActive')
    })

    enlaces.addEventListener('click', () => {
        icono.classList.toggle('fa-times')
        navbarWrapper.classList.toggle('mobileActive')
    })

});