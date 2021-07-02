const DAYS_IN_WEEK = 7;

function createDaysOfWeek () {
    let zeroDay = new Date();
    const firstDateOfWeek = zeroDay.getDate() - zeroDay.getDay();
    zeroDay.setDate(firstDateOfWeek);
  
    const days = [];
  
    let i = 0;
    while(i < DAYS_IN_WEEK) {
      const dayText = zeroDay.toLocaleDateString("en", {weekday: "short"});
      days.push(dayText);
      zeroDay.setDate(zeroDay.getDate() + 1)
      i = i + 1;
    }

    return days;
}

export {
    DAYS_IN_WEEK,
    createDaysOfWeek,
}