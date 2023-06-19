const assert = require('assert');
const fetchBreedInfo = require('../breedFetcher');

describe('Breed Details Fetcher', () => {
  it('should fetch and display the description of a valid breed', (done) => {
    const expectedDescription ="Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.";
    fetchBreedInfo(undefined, 'bengal', (error, description) => {
      assert.strictEqual(error, null);
      assert.strictEqual(description, expectedDescription);
      done();
    });
  });

  it('should handle breed not found and return an error', (done) => {
    const expectedError = "Breed 'unknown' not found";
    fetchBreedInfo(undefined, 'unknown', (error, description) => {
      assert.strictEqual(error, expectedError);
      assert.strictEqual(description, null);
      done();
    });
  });

  it('should handle request failure and return an error', (done) => {
    const expectedError = 'Error occurred during request: Error: getaddrinfo ENOTFOUND api.thecpi.com';
    fetchBreedInfo('https://api.thecpi.com//bree', '', (error, description) => {
      assert.strictEqual(error, expectedError);
      assert.strictEqual(description, null);
      done();
    });
  });
});
