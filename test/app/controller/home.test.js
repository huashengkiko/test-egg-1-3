'use strict';
/* eslint-disable no-undef */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /yuri-kiko', () => {
    return app.httpRequest()
      .get('/yuri-kiko')
      .expect(200)
      .expect({
        code: 1,
        message: '操作成功',
        success: true,
        payload: {
          msg: 'hi, guy',
        },
      });
  });
});
