//Switch Case :

function week(date) {
  let day;

  switch (date) {
    case 0:
      day = 1;
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuseday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "Thusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Invalid day!";
  }
  return day;
}

console.log(week(0));
console.log(week(1));
console.log(week(5));
console.log(week(8));
