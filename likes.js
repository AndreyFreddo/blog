let likesButton = document.querySelector(".like-button");
let likesCounter = document.querySelector(".likes-counter");

likesButton.onclick = function () {
  if (likesButton.classList.contains("added")) {
    likesCounter.textContent--;
    likesButton.style.backgroundImage = "url(Content/Like.svg)";
  } else {
    likesCounter.textContent++;
    likesButton.style.backgroundImage = "url(Content/Like-color.svg)";
  }

  likesButton.classList.toggle("added");
};
