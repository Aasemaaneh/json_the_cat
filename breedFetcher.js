const request = require('request');

const fetchBreedInfo = (url = `https://api.thecatapi.com/v1/breeds/search?q=`, breedName, callback) => {
  url = url + breedName;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(`Error occurred during request: ${error}`, null);
      return;
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed '${breedName}' not found`, null);
        return;
      } else {
        const breed = data[0];
        const description = breed.description;
        callback(null, description);
      }
    }
  });
};

module.exports = fetchBreedInfo;

// Test by  Command line argument for breed name and url
const url = process.argv[2];
const breedName = process.argv[3];
fetchBreedInfo(url , breedName, console.log)
//node breedFetcher.js https://api.thecatapi.com/v1/breeds/search?q= scottish
