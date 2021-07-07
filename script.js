const listOfBookmarks = document.querySelectorAll(".quiz-card__bookmark");
const listOfButtons = document.querySelectorAll(".quiz-card__button");
const listOfCards = document.querySelectorAll(".quiz-card");

for (let i = 0; i < listOfBookmarks.length; i++) {
  const bookmark = listOfBookmarks[i];
  bookmark.addEventListener("click", () => {
    if (bookmark.textContent === "bookmark") {
      bookmark.textContent = "bookmark_border";
    } else {
      bookmark.textContent = "bookmark";
    }
  });
}

for (let i = 0; i < listOfButtons.length; i++) {
  const button = listOfButtons[i];
  const card = listOfCards[i];
  button.addEventListener("click", () => {
    if (button.textContent === "Show Answer") {
      button.textContent = "Hide Answer";
    } else {
      button.textContent = "Show Answer";
    }
    button.classList.toggle("quiz-card__button--toggled");
    card.classList.toggle("quiz-card--opened");
  });
}

//=============Create Page=====

const data = [];
const formElement = document.querySelector(".create_form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = formElement.add_question.value;
  const answer = formElement.add_answer.value;
  const tags = formElement.add_tags.value;

  const newQuestion = {
    question: question, //Could be typed only "question", since the const-name and the key-name are the same!
    answer: answer,
    tags: tags,
  };
  if (!data.length) {
    pushdata(newQuestion);
  } else {
    data.length = 0;
    pushdata(newQuestion);
  }

  formElement.reset();
});

function pushdata(object) {
  data.push(object);
  console.log(data);
}
