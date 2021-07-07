import { cardCreate } from "./lib/card-create.js";
import { data } from "./lib/db.js";

const cardSections = [];
data.forEach((cardData) => {
  const cardSetion = cardCreate(cardData);
  cardSections.push(cardSetion);
});

const cardSectionElement = document.querySelector(".content");
cardSections.forEach((cardSetion) => {
  cardSectionElement.append(cardSetion);
});

//=============Bookmark toggle=====

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
