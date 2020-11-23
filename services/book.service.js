const Book = require("../models/Book");
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

function bookService() {
    async function getBooks() {
      return Book.find({})
    }
  
    async function addBook(Title, Author, description, ISBN, publishDate, pageCount, createdAt, NumberOfCopies) {
      return Book.create({Title: Title, Author: Author,ISBN:ISBN, description: description, publishDate: publishDate,pageCount: pageCount, createdAt: createdAt, NumberOfCopies: NumberOfCopies})
    }
  
    async function deleteBook(isbn) {
      return Book.deleteOne({ISBN: isbn})
    }
    /*async function saveCover(book, coverEncoded) {
      if (coverEncoded == null) return
      const cover = JSON.parse(coverEncoded)
      if (cover != null && imageMimeTypes.includes(cover.type)) {
        book.coverImage = new Buffer.from(cover.data, 'base64')
        book.coverImageType = cover.type
      }
    }*/
    return {
      getBooks,
      addBook,
      deleteBook
      //saveCover
    }
  }
  module.exports = bookService;