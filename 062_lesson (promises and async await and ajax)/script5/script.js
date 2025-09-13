const whereAmI = async function (country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );

  console.log(response);
};

whereAmI("portugal");
console.log("Hello!");
