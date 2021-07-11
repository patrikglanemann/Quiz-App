export function getCards() {
  let cards = JSON.parse(localStorage.getItem("cards"));
  if (cards === null) {
    cards = [];
  }

  return cards;
}

export function addCard(cardData) {
  let cards = getCards();
  cardData.id = cards.length;
  cards.push(cardData);

  try {
    localStorage.setItem("cards", JSON.stringify(cards));
  } catch (error) {
    console.log(error);
    alert("There was an error while saving");
  }
  console.log("Crad created.");
  console.log(cardData);
}

export function deleteCard(cardID) {
  let cards = getCards();
  cards.splice(cardID, 1);
  restoreID(cards);
  replaceCards(cards);
}

export function setCardBookmark(bookmarkStatus, cardID) {
  let cards = getCards();
  if (bookmarkStatus === "bookmark") {
    cards[cardID].isBookmarked = true;
  } else {
    cards[cardID].isBookmarked = false;
  }
  replaceCards(cards);
}

function restoreID(cards) {
  let i = 0;
  cards.forEach((card) => {
    card.id = i;
    i++;
  });
  return cards;
}

function replaceCards(cards) {
  try {
    localStorage.setItem("cards", JSON.stringify(cards));
  } catch (error) {
    console.log(error);
    alert("There was an error while saving");
  }
}
