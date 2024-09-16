// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');

//   const toggleMenu = () => {
//     const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     document.body.classList.toggle('.lock');
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);

//   window.matchMedia('(min-width: 768px)').addEventListener('change', () => {
//     if (window.matchMedia('(min-width: 768px)').matches) {
//       mobileMenu.classList.remove('is-open') &&
//         openMenuBtn.setAttribute('aria-expanded', false);
//     }
//   });
// })();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const menuLinks = document.querySelectorAll('.js-menu-container a'); // Все ссылки в меню

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('lock');
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  // Закрытие меню при изменении ширины экрана
  window.matchMedia('(min-width: 768px)').addEventListener('change', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      document.body.classList.remove('lock');
    });
  });
})();
