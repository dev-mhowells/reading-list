"use strict";

const enterBtn = document.querySelector(".enter");
const title = document.querySelector(".book");
const author = document.querySelector(".author-name");
const read = document.querySelector(".read");
const readStatus = document.querySelector("#status");

const summaryBlocks = document.getElementById("summary-blocks");
const blocksGrid = document.getElementById("blocks-grid");

let myLibrary = [];

function Book(title, author, readStatus) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
  this.report = function () {
    return `${title} by ${author}, ${read ? `already read` : `not read yet`}`;
  };
}

//-------TEST FUNCTIONS----------

function addBookToLibrary() {
  const book = new Book(title.value, author.value, readStatus.selectedIndex);
  myLibrary.push(book);
}

// function removeBook()
console.log("hi");

enterBtn.addEventListener("click", function () {
  while (blocksGrid.firstChild) {
    blocksGrid.removeChild(blocksGrid.firstChild);
  }

  addBookToLibrary();

  for (let i = 0; i < myLibrary.length; i++) {
    const block = document.createElement("div");
    block.classList.add("summary-blocks");
    blocksGrid.appendChild(block);

    const titleDisplay = document.createElement("p");
    titleDisplay.textContent = myLibrary[i].title;
    block.appendChild(titleDisplay);

    const by = document.createElement("h4");
    by.textContent = "by";
    block.appendChild(by);

    const authorDisplay = document.createElement("p");
    authorDisplay.textContent = myLibrary[i].author;
    block.appendChild(authorDisplay);

    const readStatusDisplay = document.createElement("p");
    readStatusDisplay.classList.add("read-word");
    const statusEval = myLibrary[i].readStatus ? "Unread" : "Read";
    readStatusDisplay.textContent = statusEval;
    // readStatusDisplay.style.alignSelf = "";
    block.appendChild(readStatusDisplay);
  }
});

//------WORKING--------

// PROBLEM: CREATES MULTIPLE BOOKS IN ARRAY, SAME VARIABLE NAME... CAN'T CALL INDIVIDUAL BOOKS
// enterBtn.addEventListener("click", function () {
//   const book = new Book(title.value, author.value, read.value);

//   myLibrary.push(book);
//   for (let i = 0; i < myLibrary.length; i++) {}

//   const block = document.createElement("div");
//   block.classList.add("summary-blocks");
//   blocksGrid.appendChild(block);

//   const titleDisplay = document.createElement("p");
//   titleDisplay.textContent = title.value;
//   block.appendChild(titleDisplay);
// });

//-------------------OLD-----------------------

// const generateReport = function () {
// const testBooks = [];
// const book1 = new Book("LOTR", "Tolkein", true);
// const book2 = new Book("abc", "Tol", false);

// console.log(book1, book2);
// console.log(book1.title, book2.title);

// testBooks.push(book1);
// testBooks.push(book2);
// console.log(testBooks);

//   console.log(book1.report());
// };
// generateReport();

//   report: function () {
//     return `${this.title} by ${this.author}, ${this.read ? `already read` : `not read yet`}`;
//   }
// }

// function displayBook() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     console.log;
//   }
// }

// Book.prototype.report = function () {
//   return `${title} by ${author}, ${read ? `already read` : `not read yet`}`;
// };

// enterBtn.addEventListener("click", function () {
//   const book1 = Object.create(Book);
//   book1.title = title.value;
//   book1.author = author.value;
//   book1.read = read.value;
//   console.log(Book);
//   console.log(book1);
//   //   console.log(book1.report());
// });
