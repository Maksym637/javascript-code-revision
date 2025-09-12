const whereAmI = function (latitude, longitude) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Problem with gecoding ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
    })
    .catch((error) => console.log(`${error.message}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
