const slider = document.querySelector('.memleketim-liste');
const sliderItems = document.querySelectorAll('.memleket-fotolar');
const arrowRight = document.querySelector('.arrow-right');

let activeIndex = 0;
let clickCount = 0;

arrowRight.addEventListener('click', () => {
  clickCount++;
  activeIndex++;
  if (activeIndex >= sliderItems.length) {
    activeIndex = 0;
  }
  slider.style.transition = 'transform 1.5s ease-in-out';
  slider.style.transform = `translateX(-${activeIndex * sliderItems[0].clientWidth}px)`;
  if (clickCount >= 5) {
    clickCount = 0;
    activeIndex = 0;
    slider.style.transition = 'transform 1.5s ease-in-out';
    slider.style.transform = `translateX(0)`;
  }
});
