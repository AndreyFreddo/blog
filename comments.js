let commentForm = document.querySelector(".comment-form");
let commentList = document.querySelector(".comment-list");
let nameField = document.querySelector("#name-field");

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newFoto = document.createElement("img");
  newFoto.setAttribute("src", "Content/user1.png");
  commentList.append(newFoto);

  let newName = document.createElement("span");
  newName.classList.add("username");
  newName.textContent = nameField.value;
  nameField.value = "";
  commentList.append(newName);

  let newComment = document.createElement("p");
  newComment.classList.add("user-comment");
  newComment.textContent = commentField.value;
  commentField.value = "";
  commentList.append(newComment);
};
