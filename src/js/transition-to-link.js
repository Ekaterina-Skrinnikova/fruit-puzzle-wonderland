const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

document.querySelectorAll('.header-nav-link').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    const sectionId = item.getAttribute('href').substring(1);
    const targetSection = document.getElementById(sectionId);

    targetSection.style.paddingTop = `${headerHeight}px`;

    window.matchMedia('(min-width: 1440px)').addEventListener('change', () => {
      if (window.matchMedia('(min-width: 1440px)').matches) {
        if (
          Array.from(document.querySelectorAll('section')).indexOf(
            targetSection
          ) %
            2 ===
          1
        ) {
          targetSection.style.paddingTop = `${headerHeight}px`;
        }
      }
    });

    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});
