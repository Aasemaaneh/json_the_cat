# Breed Fetcher

Breed Fetcher is a Node.js application that fetches and displays information about cat breeds using the Cat API. It allows users to provide a breed name and retrieve the description of that breed.

## Installation

1. Clone the repository: `git@github.com:Aasemaaneh/json_the_cat.git`
2. Navigate to the project directory: `cd breed-fetcher`
3. Install dependencies: `npm install request`

## Usage

The application can be used by running the `breedFetcher.js` file with the appropriate command-line arguments.

Syntax: `node breedFetcher.js [API_URL] [breedName]`

Example: `node breedFetcher.js https://api.thecatapi.com/v1/breeds/search?q= scottish`

Replace `[API_URL]` with the URL of the Cat API's breed search endpoint and `[breedName]` with the name of the breed you want to fetch information for.

The application will output the description of the specified breed if found. Otherwise, it will display an error message.

## API Rate Limit

Please note that the Cat API may have rate limits in place. Ensure that you have a valid API key or adhere to any usage limits set by the API provider.

## Testing

The project includes a set of test cases to verify the functionality of the `fetchBreedInfo` function and Edge cases. To run the tests, use the following command:

npm test
