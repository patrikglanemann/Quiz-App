const listOfBookmarks = document.querySelectorAll(".quiz-card__bookmark");

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
