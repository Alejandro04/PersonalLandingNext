(function(){
    const openBtn = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeNav = document.querySelector('.nav__close');

    openBtn.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    })

    closeNav.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    })
})();