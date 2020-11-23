const Book = require("../models/Book");
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

function bookService() {
    async function getBooks() {
      return Book.find({})
    }
  
    async function addBook(Title, Author, description, publishDate, pageCount, createdAt, NumberOfCopies) {
      return Book.create({Title: Title, Author: Author, description: description, publishDate: publishDate,pageCount: pageCount, createdAt: createdAt, NumberOfCopies: NumberOfCopies})
    }
  
    async function deleteBook(title) {
      return Book.deleteOne({Title: title})
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