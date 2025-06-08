// Use ANY data type, return ANY data type, short-circuiting

// OR operator and Nullish-Coalescing operator
console.log(3 || "Maksym");
console.log("" || "Maksym");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

console.log(undefined ?? 10);

// AND operator
console.log(0 && "Maksym");
