const axios = require('axios');

describe('API Tests for for DELETE book', function () {
    let response;
    beforeAll(async () => {
      response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/5',{
      headers: {
        accept: '*/*',
        },
      });
    });

    test('should return status code 200', async () => {
      await expect(response.status).toEqual(200);
    });
  });