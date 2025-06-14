// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key) {
  console.log(`Key: ${key}, Value: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBR", "USD", "EUR", "EUR"]);

currenciesUnique.forEach(function (value, key) {
  console.log(`Key: ${key}, Value: ${value}`);
});
