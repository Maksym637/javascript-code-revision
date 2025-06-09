// Part 1
const airplane = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airplane.length);

console.log(airplane.indexOf("A"));
console.log(airplane.lastIndexOf("A"));
console.log(airplane.slice(4, 7));

// Part 2
const person = "mAkSyM";
const updatedPerson =
  person.toUpperCase()[0] + person.toLowerCase().slice(1, person.length);
console.log(updatedPerson);

const email = "maksym@gmail.com";
console.log(email.replace("@gmail.com", "@outlook.com"));

console.log(airplane.includes("Spain"));

// Part 3
console.log("a+very+nice+string".split("+"));
console.log("Maksym".padStart(10, "<>").padEnd(14, "<>"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);

  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(2222333344445555));
