const calculateTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [];
const totals = [];

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

for (let i = 0; i < bills.length; i++) {
  const tip = calculateTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips, totals);
