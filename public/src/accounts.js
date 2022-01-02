function findAccountById(accounts, id) {
  return accounts.find(account => {return account.id === id})
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last;
    const lastNameB = accountB.name.last;
    return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
  })
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account;
  let total = 0;
  for(let book in books){
    const {borrows} = books[book];
    borrows.forEach((element) => {if(element.id === id){
      total ++;
    }})
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let total = [];
  books.forEach(book => {
  if (book.borrows.find(item => item.id === account.id && !item.returned)){
    total.push(book);
  }
})
  console.log(total);
  total.forEach(book => {
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return total
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
