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
