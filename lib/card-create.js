export function cardCreate(cardData) {
  const section = document.createElement("section");
  section.classList.add("quiz-card");

  const cardHeaer = document.createElement("div");
  cardHeaer.classList.add("quiz-card__header");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Question:";

  const cardBookmark = document.createElement("i");
  cardBookmark.classList.add("quiz-card__bookmark", "material-icons-outlined");
  cardBookmark.addEventListener("click", () => {
    cardBookmark.textContent = bookmarkToggle(false, cardBookmark.textContent);
  });
  cardBookmark.textContent = bookmarkToggle(cardData.isBookmarked, "");

  const cardQuestion = document.createElement("p");
  cardQuestion.classList.add("quiz-card__question");
  cardQuestion.textContent = cardData.question;

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

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("quiz-card__answer");
  cardAnswer.textContent = cardData.answer;

  const cardTagList = document.createElement("div");
  cardTagList.classList.add("quiz-card__tags");

  const cardTagItems = document.createElement("div");
  cardTagItems.classList.add("quiz-card__tag");

  cardHeaer.append(cardTitle);
  cardHeaer.append(cardBookmark);

  section.append(cardHeaer);
  section.append(cardQuestion);
  section.append(cardButton);
  section.append(cardAnswer);

  return section;
}

function bookmarkToggle(isBookmarked, bookmarkedText) {
  if (isBookmarked || bookmarkedText === "bookmark_border") {
    return "bookmark";
  } else {
    return "bookmark_border";
  }
}
