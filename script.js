document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const ques = document.querySelectorAll(".question");
  const answers = document.querySelectorAll(".answer");
  const images = document.querySelectorAll(".title img");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", active);
    boxes[i].addEventListener("keypress", active);

    function active(event) {
      if (ques[i] || images[i]) {
        answers[i].classList.toggle("extra");
        if (answers[i].classList.contains("extra")) {
          open(i);
        } else {
          close(i);
          event.preventDefault();
        }
      }
    }
  }
  const open = (i) => {
    images[i].setAttribute("src", "./assets/images/icon-minus.svg");
    answers[i].style.height = answers[i].scrollHeight + "px";
  };
  const close = (i) => {
    images[i].setAttribute("src", "./assets/images/icon-plus.svg");
    answers[i].style.height = "";
  };
});
