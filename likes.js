let likesButton = document.querySelector(".like-button");
let likesCounter = document.querySelector(".likes-counter");

likesButton.onclick = function () {
  if (likesButton.classList.contains("added")) {
    likesCounter.textContent--;
  } else {
    likesCounter.textContent++;
  }

  likesButton.classList.toggle("added");
};
