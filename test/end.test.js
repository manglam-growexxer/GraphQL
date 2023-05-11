const chai = require('chai');
const assert = chai.assert;
const Project = require('../server/models/project.model');
const Client = require('../server/models/client.model');
describe('Delete records after testcase executed', () => {

    it('Delete project records after test comeplete', (done) => {
        Promise.all([
            Project.deleteMany()
        ]).then(() => {
            done();
        }).catch(() => {
            assert(true, false);
        });
    });

    it('Delete client records after test comeplete', (done) => {
        Promise.all([
            Client.deleteMany()
        ]).then(() => {
            done();
        }).catch(() => {
            assert(true, false);
        });
    });
});
