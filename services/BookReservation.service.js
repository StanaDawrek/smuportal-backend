const reservationBook = require("../models/reservationBook"); 
function BookReservationService(){ 
    async function reserveBook(startDay,endDay,ISBN){ 
        return reservationBook.create({ startDay: startDay, endDay: endDay, ISBN: ISBN}) 
    }

    async function getReservations() {
        return reservationBook.find({})
    }
    
    async function deleteReservation(ISBN) {
        return reservationBook.deleteOne({ISBN: ISBN})
    }  
    
    /* async function getBookings(ISBN,startDay) { 
        return Book.find({ _id: mongoose.Types.ObjectId(ISBN) }) 
        .select("Title -_id") 
        .populate({ path: "Title", 
        select: "-__v -_id -name -capacity", 
        match: { _id: ISBN}, 
        populate: { path: "books", 
        select: "bookings name", 
        populate: { path: "bookings", 
        match: { day: startDay } } } }) .lean(); 
    } 
    async function getBookInfo(ISBN) { 
        return Book.findById(ISBN) 
        .select("-__v -bookings -_id") 
        .populate({ path: "ISBN", select: "title" });
    } 
    async function getBookBookings(ISBN, startDay) { 
        return Booking.find({ bookId: mongoose.Types.ObjectId(ISBN), day: startDay });
    }
    async function getUserBookBookingsByDate(startDay, userID) {
           return Booking.find({ user: mongoose.Types.ObjectId(userID), day: startDay }); 
    }*/ 
    return{
         reserveBook,
         getReservations,
         deleteReservation
        /*getBookings, 
        getBookBookings, 
        getUserBookBookingsByDate, 
        getBookInfo*/ 
        }
    } 
module.exports = BookReservationService;