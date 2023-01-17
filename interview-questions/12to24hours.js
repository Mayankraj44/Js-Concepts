// Convert 12 to 24 Hours format

// 05:45 PM = 17:45

function convert12to24(timeString) {
  const [time, format] = timeString.split(" ");
  let [hour, minute] = time.split(":");
  if (hour === "12") {
    hour = "00";
  }
  if (format.toUpperCase() === "PM") {
    hour = Number(hour) + 12;
  }
  return `${hour}:${minute}`;
}

console.log(convert12to24("12:45 AM"));
