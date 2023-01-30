const input = `14 30
20`;

let [hour, minute, cook] = input.replace(/\n/g, " ").split(" ").map(Number);

if (minute + cook >= 60) {
  hour = hour + 1;
  minute = minute + cook - 60;
} else {
  minute = minute + cook;
}
console.log(hour, minute);
