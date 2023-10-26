function findAuthorById(authors, id) {
  const FOUND_AUTHOR = authors.find((author) => author.id === id);
  
  if(FOUND_AUTHOR)
    return FOUND_AUTHOR;
  else {
    return "Author not found";
   }
}

function findBookById(books, id) {
  const FOUND_BOOK = books.find((book) => book.id === id);
  
  if(FOUND_BOOK)
    return FOUND_BOOK;
  else {
    return "Book not found";
   }
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
