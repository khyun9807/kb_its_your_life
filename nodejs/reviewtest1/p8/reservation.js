function getReservation(num) {
  if (num >= 5) {
    return reserveLargRoom;
  } else {
    return reserveStandardSeat;
  }
}

function reserveLargRoom() {
  return 'large room booked';
}

function reserveStandardSeat() {
  return 'standard room booked';
}

module.exports = { getReservation };
