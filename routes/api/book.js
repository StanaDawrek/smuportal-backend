const Router = require("express").Router;
const bookService = require("../../services/book.service")();
const Book = require("../../models/Book");

const router = Router({
    mergeParams: true,
  });

router.get("/getBooks", async(req, res, next) => {
    try{
        const books = await bookService.getBooks();
        res.send(books)
    }
    catch(err) {
        res.send({msg: "Failed to get books"})
    }
});

//Route to create a book
router.post("/addBook", async(req, res, next) => {
    //const book = new Book({
       // Title: req.body.Title,
        //Author: req.body.Author,
        //ublishDate: new Date(req.body.publishDate),
       // createdAt: new Date(req.body.createdAt),
       // pageCount: req.body.pageCount,
       // description: req.body.description
     // })
      //saveCover(book, req.body.cover)
    try {
        const {Title, Author, description,publishDate,pageCount,createdAt,NumberOfCopies} = req.body;
        await bookService.addBook(Title, Author, description,publishDate, pageCount,createdAt,NumberOfCopies);
        res.send({ success: true, msg: "Book Added"});
    } catch (err) {
        res.send({ success: false, msg: "Book not Added!", err})
    }
});

//Route to delete a book
router.delete("/deleteBook/:title", async(req, res, next) => {
    try {
        const title = req.params.title;
        await bookService.deleteBook(title);
        res.send({ success: true, msg: "Book deleted"})
    } catch (error) {
        res.send({ success: false, msg: "Book not Added!"})
    }
});

module.exports = router;