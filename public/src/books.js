function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let available = [];
  let unavailable = [];
  const bookStatus = [];
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned;
    if(isBookReturned) {
      unavailable.push(book);
    } else {
      available.push(book)
    }
  })
  bookStatus.push(available)
  bookStatus.push(unavailable)
  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  let total = [];
  let totalBorrow = book.borrows;
  totalBorrow.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    let object = account;
    object['returned'] = borrow.returned
    total.push(object)
  })
  return total.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
