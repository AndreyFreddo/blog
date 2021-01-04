let commentField = document.querySelector("textarea");
let submitButton = document.querySelector(".js-button");

commentField.oninput = function () {
  if (commentField.value.length > 200 || commentField.value.length < 10) {
    commentField.classList.add("warning");
    submitButton.disabled = true;
  } else {
    commentField.classList.remove("warning");
    submitButton.disabled = false;
  }
};
