const books = [
  { id: 1, name: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, name: "Moby Dick", price: 12.3 },
  { id: 3, name: "1984", price: 8.5 },
];
function getBooks(id) {
  for (let book of books) {
    if (book.id == id) {
      return book;
    }
  }
  const idNotFound = "This id does not exist"
  return idNotFound;
}

function addBook(name, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.id > maxId) maxId = book.id;
  }
  const newBook = { id: maxId + 1, name: name, price: price };
  const updatedBooks = [...books, newBook];
  return updatedBooks;
}

function logBook() {
  for (let book of books) {
    console.log(book.name + " - " + book.price + "€");
  }
}

// Example Function Calls
let myBook = getBooks(2);
console.log(myBook);
addBook("Fahrenheit 451", 9.2);
logBook();
