const personA = {
  firstName: "Maksym",
  year: 1991,

  calculateAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

// Hey undefined
personA.greet();
