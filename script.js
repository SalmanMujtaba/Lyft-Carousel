let cardContainer;
let currentShift = 0;
let offset = 288;
let maxShift = 1625;
let minShift = 0;
document.addEventListener("DOMContentLoaded", (e) => {
  let btn = document.querySelector("#button-container");
  btn.addEventListener("click", buttonClick);
  cardContainer = document.querySelector('.card-container')
});

function buttonClick(e) {
  console.log(e);

}

function next() {
  if (Math.abs(currentShift) < Math.abs(maxShift)) {
    currentShift = currentShift - offset;
    cardContainer.style.transform = `translateX(${currentShift}px)`;
    window.requestAnimationFrame(() => {});
  }
}

function prev() {
  if (Math.abs(currentShift) > Math.abs(minShift)) {
    currentShift = currentShift + offset;
    cardContainer.style.transform = `translateX(${currentShift}px)`;
    window.requestAnimationFrame(() => {});

  }
}