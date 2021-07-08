import { addCard } from "/lib/db.js";

const formElement = document.querySelector(".create_form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = formElement.add_question.value;
  const answer = formElement.add_answer.value;
  const tags = formElement.add_tags.value.split(",");

  const newQuestion = {
    id: 0,
    question,
    answer,
    isBookmarked: false,
    tags,
  };

  addCard(newQuestion);

  formElement.reset();
});
