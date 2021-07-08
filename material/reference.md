### Index.html <main>

      <section class="quiz-card">
        <div class="quiz-card__header">
          <h2>Question:</h2>
          <i
            class="
              quiz-card__bookmark quiz-card__bookmark--toggled
              material-icons-outlined
            "
            >bookmark_border</i
          >
        </div>
        <p class="quiz-card__question">What is the capital city of Germany?</p>
        <button class="quiz-card__button">Show Answer</button>
        <div class="quiz-card__tags">
          <div class="quiz-card__tag">#Geography</div>
          <div class="quiz-card__tag">#Germany</div>
        </div>
      </section>
      <section class="quiz-card">
        <div class="quiz-card__header">
          <h2>Question:</h2>
          <i class="quiz-card__bookmark material-icons-outlined"
            >bookmark_border</i
          >
        </div>
        <p class="quiz-card__question">
          What is the answer to life and everything?
        </p>
        <button class="quiz-card__button">Show Answer</button>
        <div class="quiz-card__tags">
          <div class="quiz-card__tag">#Meta</div>
          <div class="quiz-card__tag">#Movies</div>
          <div class="quiz-card__tag">#Books</div>
        </div>
      </section>
      <section class="quiz-card quiz-card--opened">
        <div class="quiz-card__header">
          <h2>Question:</h2>
          <i class="quiz-card__bookmark material-icons-outlined"
            >bookmark_border</i
          >
        </div>
        <p class="quiz-card__question">What is the capital city of Spain?</p>
        <button class="quiz-card__button quiz-card__button--toggled">
          Hide Answer
        </button>
        <p class="quiz-card__answer">Madrid</p>
        <div class="quiz-card__tags">
          <div class="quiz-card__tag">#Geography</div>
          <div class="quiz-card__tag">#Spain</div>
          <div class="quiz-card__tag">#Europe</div>
        </div>
      </section>
      <section class="quiz-card">
        <div class="quiz-card__header">
          <h2>Question:</h2>
          <i
            class="
              quiz-card__bookmark quiz-card__bookmark--toggled
              material-icons-outlined
            "
            >bookmark_border</i
          >
        </div>
        <p class="quiz-card__question">
          Which tech do we use to build the structure of a website?
        </p>
        <button class="quiz-card__button">Show Answer</button>
        <div class="quiz-card__tags">
          <div class="quiz-card__tag">#Web-Development</div>
          <div class="quiz-card__tag">#Technology</div>
        </div>
      </section>

### Data pre defined

export const data = [
{
id: 0,
question: "What type of a language is HTML?",
answer: "Markup Language",
isBookmarked: true,
tags: ["HTML", "general"],
},
{
id: 1,
question: "Inside which HTML element do we put the JavaScript?",
answer: "<script>",
isBookmarked: true,
tags: ["HTML", "Javascript", "general"],
},
{
id: 2,
question: "Who maintains the CSS specifications?",
answer: "World Wide Web Consortium.",
isBookmarked: true,
tags: ["CSS"],
},
{
id: 3,
question: "Who designed the Linux OS?",
answer: "Linus Torvalds",
isBookmarked: true,
tags: ["Linux"],
},
{
id: 4,
question:
"Which of the following key combinations allows to terminate the current process in Linux shell?",
answer: "Ctrl + C",
isBookmarked: false,
tags: ["Linux", "Shell", "Shortcuts"],
},
{
id: 5,
question: "What is the correct way to write a JavaScript array?",
answer: 'const colors = ["red", "green", "blue"]',
isBookmarked: true,
tags: ["Javascript", "Array", "general"],
},
{
id: 6,
question: "What should be the first tag in any HTML Document?",
answer: "<!doctype html>",
isBookmarked: false,
tags: ["HTML", "general"],
},
{
id: 7,
question: "How can you add a comment in a JavaScript?",
answer: "//This is a comment",
isBookmarked: false,
tags: ["Javascript", "general"],
},
{
id: 8,
question: "What tag is used to display a picture in a HTML page?",
answer: "Img",
isBookmarked: false,
tags: ["HTML", "HTML-Tag", "general", "picture"],
},
{
id: 9,
question: "HTML are web pages read and rendered by?",
answer: "Web Browser",
isBookmarked: false,
tags: ["HTML", "general"],
},
{
id: 10,
question: "Who created Git?",
answer: "Linus Torvalds",
isBookmarked: true,
tags: ["Git"],
},
];
