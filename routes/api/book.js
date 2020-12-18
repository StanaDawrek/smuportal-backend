const Router = require("express").Router;
const bookService = require("../../services/book.service")();
const Book = require("../../models/Book");
const storage = require("../../helpers/storage")
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

router.get("/getBooksByMathCategory", async(req, res, next) => {
    try{
        const category = req.body;
         const booksByCategory = await bookService.getBooksByCategory("math");
        res.send(booksByCategory)
    }
    catch(err) {
        res.send({msg: "Failed to get books"})
    }
});
router.get("/getBooksByPhysicsCategory", async(req, res, next) => {
    try{
        const category = req.body;
         const booksByCategory = await bookService.getBooksByCategory("physics");
        res.send(booksByCategory)
    }
    catch(err) {
        res.send({msg: "Failed to get books"})
    }
});
router.get("/getBooksByenglishCategory", async(req, res, next) => {
    try{
        const category = req.body;
         const booksByCategory = await bookService.getBooksByCategory("english");
        res.send(booksByCategory)
    }
    catch(err) {
        res.send({msg: "Failed to get books"})
    }
});
router.get("/getBooksbyISBN/:ISBN", async(req, res, next) => {
    try{
        const ISBN = req.params.ISBN;
         const booksByISBN = await bookService.getBooksbyISBN(ISBN);
        res.send(booksByISBN)
    }
    catch(err) {
        res.send({msg: "Failed to get books"})
    }
});

//Route to create a book
router.post("/addBook",storage, async(req, res, next) => {
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
        const imagePath = 'http://localhost:3000/images/'+ req.body.imagePath.slice(12);
        const {Title, Author, description,ISBN,publishDate,pageCount,createdAt,NumberOfCopies} = req.body;
        await bookService.addBook(Title, Author, description,ISBN,publishDate, pageCount,createdAt,NumberOfCopies,imagePath);
        const book = new Book({
            Title, Author, description,ISBN,publishDate, pageCount,createdAt,NumberOfCopies,imagePath
           }) 
        res.send({ success: true, msg: "Book Added"});
    } catch (err) {
        res.send({ success: false, msg: "Book not Added!", err})
    }
});

//Route to delete a book
router.delete("/deleteBook/:isbn", async(req, res, next) => {
    try {
        const isbn = req.params.isbn;
        await bookService.deleteBook(isbn);
        res.send({ success: true, msg: "Book deleted"})
    } catch (error) {
        res.send({ success: false, msg: "Book not Added!"})
    }
});

module.exports = router;
