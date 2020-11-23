const Router = require("express").Router;
const bookReservationService = require("../../services/bookReservation.service")();
const reservationBook = require("../../models/reservationBook"); 
const { verifyToken } = require("../../helpers/verifyToken"); 
const router = Router({ mergeParams: true, }); 
/*router.get("/getBooksBookings", async(req, res, next) =>{ 
    try{ 
     const bookings = await BookReservationService.getBookings(); res.send(bookings) }
  catch(err) { 
      res.send({msg: "Failed to get booksBookings"})
     }
}); */ 
router.post("/ReserveBook", verifyToken, async(req, res, next) => { 
     try { 
         const {startDay,endDay,ISBN} = req.body;
        await bookReservationService.reserveBook(startDay,endDay,ISBN); 
     res.send({ success: true, msg: "Book reserved"});
    } catch (err) { 
    res.send({ success: false, msg: "reservation failed", err}) 
    }
});
router.get("/getReservations", verifyToken, async(req, res, next) => {
    try{
        const Reservations = await bookReservationService.getReservations();
        res.send(Reservations)
    }
    catch(err) {
        res.send({msg: "Failed to get reservations"})
    }
});
router.delete("/deleteReservation/:ISBN", verifyToken, async(req, res, next) => {
    try {
        const ISBN = req.params.ISBN;
        await bookReservationService.deleteReservation(ISBN);
        res.send({ success: true, msg: "reservation deleted"})
    } catch (error) {
        res.send({ success: false, msg: "reservation cannot be deleted"})
    }
});
// Send email confirmation to the user 
/*let userFullName = user.firstName + " " + user.lastName; 
let userEmail = user.email; 
let bookInfo = await BookReservationService.getBookInfo(req.params.ISBN); 
let bookName = bookInfo.Title; 
transporter.sendMail( 
bookBookingConfirmation( 
    userFullName, 
    userEmail, 
    bookName, 
    req.query.date, 
    timHelper.getTimeFromMins(startDay), 
    timHelper.getTimeFromMins(endDay)
    ).sendBookConfirmation() );*/
 module.exports = router;