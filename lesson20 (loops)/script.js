// for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(`Item is - ${i}`);
}

const array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep += 1;
}
