function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let total = [];
  let returned = books.filter((book) => book.borrows[0].returned === true);
  let unavailable = books.filter((book) => book.borrows[0].returned === false);
  total.push(unavailable);
  total.push(returned);
  return total;
}

function getBorrowersForBook(book, accounts) {
  let total = [];
  let totalBorrow = book.borrows;
  totalBorrow.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    let obj = account;
    obj['returned'] = borrow.returned
    total.push(obj)
  })
  return total.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
