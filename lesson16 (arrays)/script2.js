const friends = ["Michael", "Steven", "Peter"];

// Adding elements
friends.push("Maksym");
console.log(friends);

friends.unshift("John");
console.log(friends);

// Removing elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Maksym"));
