let myLibrary = [];

function Book(title, pages, read) {
  // the constructor...
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleDone = function () {
  this.read = !this.read;
};

function toggleDone(index) {
  myLibrary[index].toggleDone();
  render();
}

let hideForm = function () {
  // to hide
  let form = document.querySelector(".new-book-form");
  form.style.display = "none";
};

function render() {
  let libraryEl = document.querySelector(".library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<div class="books">
        <p>${book.title}</p>
        <p>${book.pages}</p>
        <p>${book.read ? "&#10004;" : "&#9744"}</p>
        <button class="remove-btn" onclick="removeBook(${i})"></button>
        <button class="toggle-read-btn" onclick="toggleDone(${i})">Toggle Done</button>
      </div>
    `;

    libraryEl.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, pages, read);
  myLibrary.push(newBook);

  render();
}

let newBookbtn = document.querySelector(".new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector(".new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector(".new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
