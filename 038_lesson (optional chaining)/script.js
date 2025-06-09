const person = {
  firstName: "Maksym",
  age: 22,
  job: {
    title: "Software Test Automation Engineer",
    company: "EPAM",
  },
  friends: [
    {
      firstName: "Friend 1",
      age: 30,
    },
    {
      firstName: "Friend 2",
      age: 30,
    },
  ],
};

// undefined
console.log(person.job.title.subTitle?.description);
