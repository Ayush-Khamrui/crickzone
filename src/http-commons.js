const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://cricket-live-data.p.rapidapi.com/series',
  headers: {
    'X-RapidAPI-Key': 'de753864e1mshf5e48fefaac68c8p17549ejsn117af6245728',
    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
  }
};

const response = axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default response;