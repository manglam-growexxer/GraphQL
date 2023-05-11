const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'testing';
dotenv.config({ path: process.env.PWD + '/' + env + '.env' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server/index');
chai.use(chaiHttp);
const request = require('supertest');
request(app);

// Start testing
require('./init.test');


// test
require('./schema.test')


// End Testing
require('./end.test');

describe('Stop server in end', () => {
    it('Server should stop manually to get code coverage', done => {
        app.close();
        done();
    });
});
