const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years[0]);
console.log(years.length);

friends[2] = "Jay";
console.log(friends);

/*
friends = []
friends = []
        ^

TypeError: Assignment to constant variable.
*/
