function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach((page, index) => {
    page.classList.toggle('hide', index !== pageNumber - 1);
  });
}

const container = document.querySelector(".container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  let newTop = getRandomNumber(0, containerRect.height - btnRect.height);
  let newLeft = getRandomNumber(0, containerRect.width - btnRect.width);

  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
});

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
