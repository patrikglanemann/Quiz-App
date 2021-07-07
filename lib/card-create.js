export function cardCreate(cardData) {
  const section = sectionCreate();

  const cardHeaer = cardHeaderCreate();

  const cardTitle = cardTitleCreate();

  const cardBookmark = cardBookmarkCreate(cardData);

  const cardQuestion = cardQuestionCreate(cardData);

  const cardButton = cardButtonCreate(section);

  const cardAnswer = cardAnswerCreate(cardData);

  const cardTagList = cardTagListCreate(cardData);

  cardHeaer.append(cardTitle);
  cardHeaer.append(cardBookmark);

  section.append(cardHeaer);
  section.append(cardQuestion);
  section.append(cardButton);
  section.append(cardAnswer);
  section.append(cardTagList);

  return section;
}

function cardTagListCreate(cardData) {
  const cardTagList = document.createElement("div");
  cardTagList.classList.add("quiz-card__tags");
  cardData.tags.forEach((tag) => {
    const cardTagItems = document.createElement("div");
    cardTagItems.classList.add("quiz-card__tag");
    cardTagItems.textContent = `#${tag}`;
    cardTagList.append(cardTagItems);
  });
  return cardTagList;
}

function cardAnswerCreate(cardData) {
  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("quiz-card__answer");
  cardAnswer.textContent = cardData.answer;
  return cardAnswer;
}

function cardButtonCreate(section) {
  const cardButton = document.createElement("button");
  cardButton.classList.add("quiz-card__button");
  cardButton.textContent = "Show Answer";
  cardButton.addEventListener("click", () => {
    if (cardButton.textContent === "Show Answer") {
      cardButton.textContent = "Hide Answer";
    } else {
      cardButton.textContent = "Show Answer";
    }
    cardButton.classList.toggle("quiz-card__button--toggled");
    section.classList.toggle("quiz-card--opened");
  });
  return cardButton;
}

function cardQuestionCreate(cardData) {
  const cardQuestion = document.createElement("p");
  cardQuestion.classList.add("quiz-card__question");
  cardQuestion.textContent = cardData.question;
  return cardQuestion;
}

function cardBookmarkCreate(cardData) {
  const cardBookmark = document.createElement("i");
  cardBookmark.classList.add("quiz-card__bookmark", "material-icons-outlined");
  cardBookmark.addEventListener("click", () => {
    cardBookmark.textContent = bookmarkToggle(false, cardBookmark.textContent);
  });
  cardBookmark.textContent = bookmarkToggle(cardData.isBookmarked, "");
  return cardBookmark;
}

function cardTitleCreate() {
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Question:";
  return cardTitle;
}

function cardHeaderCreate() {
  const cardHeaer = document.createElement("div");
  cardHeaer.classList.add("quiz-card__header");
  return cardHeaer;
}

function sectionCreate() {
  const section = document.createElement("section");
  section.classList.add("quiz-card");
  return section;
}

function bookmarkToggle(isBookmarked, bookmarkedText) {
  if (isBookmarked || bookmarkedText === "bookmark_border") {
    return "bookmark";
  } else {
    return "bookmark_border";
  }
}
