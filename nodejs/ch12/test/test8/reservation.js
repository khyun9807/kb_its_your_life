function getReservation(people) {
  function reserveLargeRoom() {
    console.log('✅ 대형 룸이 예약되었습니다.');
  }

  function reserveStandardSeat() {
    console.log('✅ 일반석이 예약되었습니다.');
  }

  if (people >= 5) {
    return reserveLargeRoom;
  } else {
    return reserveStandardSeat;
  }
}

export { getReservation };
