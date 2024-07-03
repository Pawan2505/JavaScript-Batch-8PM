function getWeekdayName(dayNumber) {
  let result;

  switch (dayNumber) {
    case 0:
      result = "Sunday";
      break;
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    default:
      result = "Invalid day number";
  }

  return result;
}

console.log(getWeekdayName(0));
console.log(getWeekdayName(3));
console.log(getWeekdayName(6));
console.log(getWeekdayName(7));
