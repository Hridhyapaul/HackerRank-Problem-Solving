function timeConversion(s) {
  // Write your code here
  let timeArr = s.split(":");
  // This accesses the first character and second character of the seconds part.
  let sec = timeArr[2][0] + timeArr[2][1];
  let timeFormat = s.slice(-2);
  let time = {
    hours: timeArr[0],
    min: timeArr[1],
    sec,
    timeFormat,
  };

  if (timeFormat === "PM" && parseInt(time.hours) != 12) {
    time.hours = parseInt(time.hours) + 12;
  } else if (timeFormat === "AM" && parseInt(time.hours) == 12) {
    time.hours = "00";
  }
  return time.hours + ":" + time.min + ":" + time.sec;
}

let time = "07:05:45PM";
timeConversion(time);