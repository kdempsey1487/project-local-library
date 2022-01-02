function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0;
  books.forEach((book) => {
    if(!book.borrows[0].returned){
      total ++
    }
  })
  return total
}

function getMostCommonGenres(books) {
  const result = books.reduce((accum, book) => {
    const genre = book.genre;
    const genreInfo = accum.find((element) => element.name === genre);
    if (!genreInfo) {
      const newGenreInfo = {
        name: genre,
        count: 1,
      };
      accum.push(newGenreInfo);
    } else {
      genreInfo.count++;
    }
    return accum;
  }, []);
  result.sort((genreA, genreB) => genreB.count - genreA.count);
  result.splice(5);
  return result;
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popularityInfo = {
      name: book.title,
      count: book.borrows.length,
    };
    return popularityInfo;
  });
  result.sort((titleA, titleB) => titleB.count - titleA.count);
  result.splice(5);
  return result;
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
