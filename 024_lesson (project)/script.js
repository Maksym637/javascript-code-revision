const hiddenState = "hidden";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove(hiddenState);
  overlay.classList.remove(hiddenState);
};

const closeModal = function () {
  modal.classList.add(hiddenState);
  overlay.classList.add(hiddenState);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!modal.classList.contains(hiddenState)) {
      closeModal();
    }
  }
});
