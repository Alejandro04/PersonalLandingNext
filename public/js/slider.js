(function () {
  const sliders = [...document.querySelectorAll('.testimony__body')]
  const btnAfter = document.querySelector('#after');
  const btnBefore = document.querySelector('#before');
  let value;

  if (btnAfter && btnBefore && sliders) {

    btnAfter.addEventListener('click', () => {
      changePosition(1);
    })

    btnBefore.addEventListener('click', () => {
      changePosition(-1);
    })

    const changePosition = (add) => {
      const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      value = Number(currentTestimony);
      value += add;

      sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
      if (value === sliders.length + 1 || value === 0) {
        value = value === 0 ? sliders.length : 1;
      }

      sliders[value - 1].classList.add('testimony__body--show');
    }
  }
})();