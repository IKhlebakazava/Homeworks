const axios = require('axios');
const validator = require('jsonschema');
const putBooks = require('../schemas/putBooksFakerestAPI.json')

describe('API Tests for for PUT book', function () {
    let response;
    beforeAll(async () => {
      response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/15', {
        id: 0,
        title: 'string',
        description: 'string',
        pageCount: 0,
        excerpt: 'string',
        publishDate: '2023-11-20T19:17:23.925Z'},
        {
          headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      });
    });

    test('should return status code 200', async () => {
      await expect(response.status).toEqual(200);
    });

    test('should be valid response body', async function () {
      const result = await validator.validate(response.data, putBooks);
     await expect(result.valid).toEqual(true);
    });
  });