/// '12: 08 pm'

const convert12To24HourFormat = (strDate) => {
  let [time, timeModiefier] = strDate.split(" ");
  let [hour, minute] = time.split(":");
  if (hour === "12") hour = 0;
  if (timeModiefier.toLowerCase() === "pm")
    hour = (Number(hour) + 12).toString();
  return hour + ":" + minute;
};

console.log(convert12To24HourFormat("4:38 pm"));
