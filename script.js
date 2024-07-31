const questionsDivs = [...document.querySelectorAll(".question")];
const questions = [...document.querySelectorAll("h2")];
const answers = [...document.querySelectorAll("p")];
const arrows = [...document.querySelectorAll(".question-wrapper img")];

questionsDivs.forEach((question) => {
  question.addEventListener("click", (event) => {
    const element = event.currentTarget;
    if (element.childNodes[3].classList.contains("hide")) {
      removeActive();
      element.childNodes[1].childNodes[1].classList.add("active");
      removeInverted();
      element.childNodes[1].childNodes[3].classList.add("inverted");
      addHide();
      element.childNodes[3].classList.remove("hide");
    } else {
      removeActive();
      removeInverted();

      addHide();
    }
  });
});

function removeActive() {
  questions.forEach((question) => {
    question.classList.remove("active");
  });
}

function addHide() {
  answers.forEach((answer) => {
    answer.classList.add("hide");
  });
}
function removeInverted() {
  arrows.forEach((arrow) => {
    arrow.classList.remove("inverted");
  });
}
