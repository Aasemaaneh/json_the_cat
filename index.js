const fetchBreedInfo = require('./breedFetcher');
// Test by  Command line argument for breed name and url
const url = process.argv[2];
const breedName = process.argv[3];
fetchBreedInfo(url , breedName, console.log)
//node breedFetcher.js https://api.thecatapi.com/v1/breeds/search?q= scottish
