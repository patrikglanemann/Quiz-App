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
