const axios = require('axios');
const validator = require('jsonschema');
const getBooks = require('../schemas/getBooksFakerestAPI.json')

describe('API Tests for GET Books', function () {
    let response;
    beforeAll(async () => {
      response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books', {
        headers: {
          accept: 'text/plain; v=1.0',
        },
      });
    });

    test('should return status code 200', async () => {
      await expect(response.status).toEqual(200);
    });

    test('should be valid response body', async function () {
      const result = await validator.validate(response.data, getBooks);
      await expect(result.valid).toEqual(true);
    });
  });