// window.addEventListener('load', function () {
//   const clouds = document.querySelectorAll('.cloud');
//   clouds.forEach((cloud, index) => {
//     setTimeout(() => {
//       cloud.style.transform = 'translateX(0)';
//       cloud.style.opacity = '1';
//     }, index * 500);
//   });
// });

window.addEventListener('load', function () {
  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach((cloud, index) => {
    if (index === 1) {
      cloud.classList.add('animation-1');
    } else if (index === 0) {
      cloud.classList.add('animation-2');
    } else if (index === 3) {
      cloud.classList.add('animation-3');
    }
  });
});
