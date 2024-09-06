const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slide = document.querySelector('.slide');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slide.children.length - 1;
  }
  updateSlide();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slide.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlide();
});

function updateSlide() {
  slide.style.transform = `translateX(-${currentIndex * 100}%)`;
}
