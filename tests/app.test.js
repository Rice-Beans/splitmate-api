const { app } = require('../src/app');
const mongoose = require('mongoose');
const request = require('supertest');
const Switcher = require('switcher-client');

afterAll(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await mongoose.disconnect();
})

describe('Test APP', () => {

  test('APP - Should be running', (done) => {
    request(app)
      .get('/check')
      .send().expect(200).then(() => {
        done();
      });
  })

})