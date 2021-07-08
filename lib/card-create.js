export function cardCreate(cardData) {
  const section = sectionCreate();

  const cardHeader = cardHeaderCreate();

  const cardTitle = cardTitleCreate();

  const cardBookmark = cardBookmarkCreate(cardData);

  const cardQuestion = cardQuestionCreate(cardData);

  const cardButton = cardButtonCreate(section);

  const cardAnswer = cardAnswerCreate(cardData);

  const cardTagList = cardTagListCreate(cardData);

  const cardButtonDelete = cardButtonDeleteCreate(section);

  cardHeader.append(cardTitle);
  cardHeader.append(cardBookmark);

  section.append(cardHeader);
  section.append(cardQuestion);
  section.append(cardButton);
  section.append(cardAnswer);
  section.append(cardTagList);
  section.append(cardButtonDelete);

  return section;
}

function cardButtonDeleteCreate(section) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("quiz-card__delete-button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    section.remove();
    deleteCard();
  });
  return deleteButton;
}

function cardTagListCreate(cardData) {
  const cardTagList = document.createElement("div");
  cardTagList.classList.add("quiz-card__tags");
  cardData.tags.forEach((tag) => {
    const cardTagItems = document.createElement("div");
    cardTagItems.classList.add("quiz-card__tag");
    cardTagItems.textContent = `#${tag.trim()}`;
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
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("quiz-card__header");
  return cardHeader;
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
