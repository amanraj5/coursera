import React, { useState } from "react";

import "./Booking.css";
const BookingForm = () => {
  const [time, setTime] = useState("17:00");
  const availableBookings = {
    "17:00": ["Table 1", "Table 4"],
    "18:00": ["Table 3"],
    "19:00": [],
    "20:00": ["Table 4"],
    "21:00": ["Table 5", "Table 6"],
    "22:00": [],
  };
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className="container">
      <form>
        <h3>Make a Reservation</h3>
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" />
        <label for="res-time">Choose time</label>
        <select id="res-time " value={time} onChange={handleChange}>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <p id="availability-info">
          {availableBookings[time].length > 0 ? (
            <span id='available'>
              Bookings available at: {availableBookings[time].join(", ")}
            </span>
          ) : (
            <span id='not-available'> No bookings available at the selected time.Please select different time.</span>
          )}
        </p>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label for="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
