const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const main = document.querySelector('main');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('fixed');
    document.body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('fixed');
    document.body.style.paddingTop = 0;
  }
});
