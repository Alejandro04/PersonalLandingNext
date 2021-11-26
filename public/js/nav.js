(function () {
  const openBtn = document.querySelector('.nav__menu');
  const menu = document.querySelector('.nav__link');
  const closeNav = document.querySelector('.nav__close');

  if (openBtn && menu && closeNav) {
    openBtn.addEventListener('click', () => {
      menu.classList.add('nav__link--show');
      closeNav.classList.add('nav__link--show');
    })

    closeNav.addEventListener('click', () => {
      menu.classList.remove('nav__link--show');
      closeNav.classList.remove('nav__link--show');
    })

    menu.addEventListener('click', () => {
      menu.classList.remove('nav__link--show');
      closeNav.classList.remove('nav__link--show');
    })
  }
})();