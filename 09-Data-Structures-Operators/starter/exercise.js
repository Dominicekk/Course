'use strict';
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];
// 1.3
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars

// 2.1
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// 2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// 2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);

// 2.5
// const { thirdParty: { goodreads: { rating: booksRating } } } = books[0];

// function printBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// };

// 3.1
// const booksAuthors = [
//   ...books[0].author, ...books[1].author
// ];
// console.log(booksAuthors);

// 3.2
// function spellWord(str) {
//   console.log(...str);
// }
// spellWord('Hesoyam');

// 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// 4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// 4.3
// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The Book ${title} has ${authors.length} authors`);
// };
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// 5.1
// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// };

// 5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`${title} provides online content.`);
// };

// 6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??= console.log(`${books[i].title} provides no data about its online content`);
// };

// 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// };

// 7.2
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// };

// 8.1
// let pageSum = 0;
// for (let book of books) {
//   pageSum += book.pages;
// };
// console.log(pageSum);

// 8.2
// const allAuthors = [];
// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author)
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }
// console.log(allAuthors);

// // 8.3
// for (const [index, author] of allAuthors.entries()) {
//   console.log(`${index + 1}. ${author}`);
// }

// 9.1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);

// 9.2
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages
// }

// 10.1
// function getFirstKeyword(book) {
//   return book.keywords?.[0];
// }

// 11.1
// const entries = [];
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// // 11.2
// for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
//   entries[index].push(value);
// }

// 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);


// 11.4
// console.log(entries);
// console.log(entries2);

// 12.1
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// };
// console.log(allKeywords);

// // 12.2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// // 12.3
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// // 12.4
// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// // 12.5
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// // 12.6
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// // 13.1
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C.Martin'],
// ]);
// console.log(bookMap);

// // 13.2
// bookMap.set('pages', 464);
// console.log(bookMap);

// // 13.3
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// // 13.4
// console.log(`${bookMap.size}`);

// // 13.5
// console.log(bookMap.has('author') && 'The author of the book is known');

// // 14.1
// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// // 14.2
// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(key);
// }

// // 15.1
// console.log(books[0].ISBN['6'], books[0].ISBN['4'], books[0].ISBN['9'], books[0].ISBN['8'],);

// // 15.2
// const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// // 15.3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// // 15.4
// function isContributor(author) {
//   // return console.log(author.includes('(Contributor)'));
//   return author.lastIndexOf('(Contributor)') !== -1;
// }
// isContributor('Julie sussman (Contributor)')