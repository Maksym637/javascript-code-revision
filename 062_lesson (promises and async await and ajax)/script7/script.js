// Running Promises in Parallel

const getJSON = function (url, errorMsg = "Somthing went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const get3Countries = async function (country1, country2, country3) {
  try {
    const allData = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`),
      getJSON(`https://restcountries.com/v3.1/name/${country3}`),
    ]);

    console.log(allData.map((data) => data[0].capital[0]));
  } catch (error) {
    console.error(error);
  }
};

get3Countries("poland", "germany", "france");
