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
