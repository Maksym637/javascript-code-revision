const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

console.log(flights.split("+"));

let trimedLines = [];
for (const line of flights.split("+")) {
  trimedLines.push(line.trim());
}

console.log(trimedLines);

const getCode = (string) => string.slice(0, 3).toUpperCase();

for (const line of trimedLines) {
  const [type, from, to, time] = line.split(";");
  const output = `${type.startsWith("_Delayed") ? "->" : ""} ${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`;

  console.log(output);
}
