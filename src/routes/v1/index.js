const express = require("express");

const { BookingController } = require("../../controllers/index");

// const bookingController = new BookingController();
const router = express.Router();

router.post("/bookings", BookingController.create);

module.exports = router;