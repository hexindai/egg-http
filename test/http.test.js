'use strict';

const mock = require('egg-mock');

describe('test/http.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/http-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, http')
      .expect(200);
  });
});
