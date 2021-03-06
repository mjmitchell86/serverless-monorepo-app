import awsTesting from 'aws-testing-library/lib/chai';
import chai = require('chai');

chai.use(awsTesting);

const { expect } = chai;

describe('public api e2e', () => {
  const { config } = require('./config');
  const url = `${config.api}/public`;
  const method = 'POST';

  test('should return 200OK response', async () => {
    await expect({ url, method }).to.have.response({
      data: {
        message: 'Hi ⊂◉‿◉つ from Public API',
      },
      statusCode: 200,
    });
  });
});
