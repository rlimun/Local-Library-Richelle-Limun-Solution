function findAccountById(accounts, id) {
    const FOUND_ACCOUNT = accounts.find((account) => account.id === id);

    return FOUND_ACCOUNT ? FOUND_ACCOUNT : "id not found";
}

function sortAccountsByLastName(accounts) {
  const SORTED_LAST_NAMES = accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return SORTED_LAST_NAMES;
}

function getAccountFullNames(accounts) {
  const NAMES_LIST = accounts.map(account => account.name);
  const FULL_NAMES = NAMES_LIST.map(name => `${name.first} ${name.last}`);
  return FULL_NAMES;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
