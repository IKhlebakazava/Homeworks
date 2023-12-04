const axios = require('axios');
const validator = require('jsonschema');
const getBooksID = require('../schemas/getBooksIDFakerestAPI.json')

describe('API Tests for GET Books by ID', function () {
    let response;
    beforeAll(async () => {
      response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/1', {
        headers: {
          accept: 'text/plain; v=1.0',
        },
      });
    });

    test('should return status code 200', async () => {
      await expect(response.status).toEqual(200);
    });

    test('should be valid response body', async function () {
      const result = await validator.validate(response.data, getBooksID);
     await expect(result.valid).toEqual(true);
    });
  });