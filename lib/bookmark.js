import { cardCreate } from "/lib/card-create.js";
import { data } from "/lib/db.js";

const cardBookmarked = data.filter((isBookmarked) => {
  return isBookmarked.isBookmarked === true;
});

const cardSections = [];
cardBookmarked.forEach((cardData) => {
  const cardSetion = cardCreate(cardData);
  cardSections.push(cardSetion);
});

const cardSectionElement = document.querySelector(".content");
cardSections.forEach((cardSetion) => {
  cardSectionElement.append(cardSetion);
});
