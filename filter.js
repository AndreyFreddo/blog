let articles = document.querySelectorAll(".blog-article");
let filter = document.querySelector(".select-theme");

filter.onchange = function () {
  for (let article of articles) {
    if (
      article.dataset.category !== filter.value &&
      filter.value !== "all-articles"
    ) {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
};
