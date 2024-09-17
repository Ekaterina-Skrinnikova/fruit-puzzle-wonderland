const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
console.log(headerHeight);

document.querySelectorAll('.header-nav-link').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = item.getAttribute('href').substring(1);
    const targetSection = document.getElementById(sectionId);

    if (
      Array.from(document.querySelectorAll('section')).indexOf(targetSection) %
        2 ===
      1
    ) {
      targetSection.style.paddingTop = `${headerHeight}px`;
      console.log(headerHeight);
    }

    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
