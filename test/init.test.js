const request = require('supertest');
const app = require('../server/index');
request(app);
const chai = require('chai');
const chaiHttp = require('chai-http');
const Project = require('../server/models/project.model');
const Client = require('../server/models/client.model');
const ProjectSeed = require('./seed/project.seed');
const ClientSeed = require('./seed/client.seed');
const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiHttp);

describe('Data seeding', () => {
    it('Add project data', async () => {
        try {
            const data=await Project.insertMany(ProjectSeed.projects);
        } catch (error) {
            assert.equal(null, error);
        }
    });

    it('Add client data', async () => {
        try {
            await Client.insertMany(ClientSeed.clients);
        } catch (error) {
            assert.equal(null, error);
        }
    });

    it('Check server root url', async () => {
        try {
            request(process.env.PORT)
                .get('/')
                .end((err, res) => {
                    expect(res.body.status).to.be.status;
                    assert.equal(res.body.status, 'ok');
                });
        } catch (error) {
            assert.equal(null, error);
        }
    });
});
