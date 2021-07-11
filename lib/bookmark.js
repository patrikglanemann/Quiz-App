import { cardCreate } from "/lib/card-create.js";
//import { data } from "./lib/db.js";
import { getCards } from "/lib/db.js";

//Filter bookmarked cards
const cardBookmarked = getCards().filter((isBookmarked) => {
  return isBookmarked.isBookmarked === true;
});

//Create Cards
const cardSections = [];
cardBookmarked.forEach((cardData) => {
  const cardSetion = cardCreate(cardData);
  cardSections.push(cardSetion);
});

//Add Cards
const cardSectionElement = document.querySelector(".content");
cardSections.forEach((cardSetion) => {
  cardSectionElement.append(cardSetion);
});
