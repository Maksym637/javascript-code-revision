const hours = {
  thu: {
    open: 12,
    close: 23,
  },
  fri: {
    open: 12,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

for (const day of Object.keys(hours)) {
  console.log(day);
}

for (const openCloseHrs of Object.values(hours)) {
  console.log(openCloseHrs);
}

for (const data of Object.entries(hours)) {
  console.log(data);
}
