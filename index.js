import { cardCreate } from "./lib/card-create.js";
//import { data } from "./lib/db.js";
import { getCards } from "./lib/db.js";

//Create Cards
const cardSections = [];
getCards().forEach((cardData) => {
  const cardSetion = cardCreate(cardData);
  cardSections.push(cardSetion);
});

//Add Cards
const cardSectionElement = document.querySelector(".content");
cardSections.forEach((cardSetion) => {
  cardSectionElement.append(cardSetion);
});
