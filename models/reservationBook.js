const mongoose = require("mongoose");
const bookingBookSchema = new mongoose.Schema(
  {
    startDay: {
      type: Date,
      required: true
    },
    endDay: {
      type: Date,
      required: true,
      validate: {
        validator: endDay => {
          return !this.startDay < endDay ;
        },
        message: endTime => `endTime must be larger than startTime `
      },
      /*validate: {
        validator: (endDay,startDay) => {
          return  endDay-startDay<=3 ;
        },
        message: endTime => `the duration must be at maximum 3 days `
      }*/
    },
    
    ISBN: {
      type: Number,
      unique: true,
      required: true,
      min: 1000000000,
      max: 9999999999999,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value"
      }
    },
  
  });
  
  module.exports = mongoose.model("reservationBook", bookingBookSchema);
  