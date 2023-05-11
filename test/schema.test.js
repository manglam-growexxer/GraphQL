const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const request = require("supertest");
const expect = chai.expect;
const assert = chai.assert;
const graphql = require("graphql");
const schema = require("../server/schema/schema");
const app = require("../server/index");
const projectModel = require("../server/models/project.model");

describe("Root Queries", function () {
  it("should return a list of projects", async () => {
    const response = await chai
      .request(app)
      .post("/graphql")
      .send({ query: "{ projects { id name } }" });
    expect(response).to.have.status(200);
    expect(response.body).to.be.an("object");
    expect(response.body.data).to.have.property("projects");
    expect(response.body.data.projects).to.be.an("array");
  });

  it("should return a list of projects with client", async () => {
    const response = await chai
      .request(app)
      .post("/graphql")
      .send({ query: "{ projects { id name status client {name} } }" });
    expect(response).to.have.status(200);
    expect(response.body).to.be.an("object");
    expect(response.body.data).to.have.property("projects");
    expect(response.body.data.projects).to.be.an("array");
  });

  it("should return a project by id", async () => {
    const response = await chai.request(app).post("/graphql").send({
      query: `{ project (id: "645b3b027d6310e97685a776") { name } }`,
    });
    expect(response).to.have.status(200);
  });

  it("should return a list of clients", async () => {
    const response = await chai
      .request(app)
      .post("/graphql")
      .send({ query: "{ clients { id name } }" });

    expect(response).to.have.status(200);
    expect(response.body).to.be.an("object");
    expect(response.body.data).to.have.property("clients");
    expect(response.body.data.clients).to.be.an("array");
  });

  it("should return a client by id", async () => {
    const response = await chai.request(app).post("/graphql").send({
      query: `{ client (id: "5f083c352a7908662c334532") { name } }`,
    });
    expect(response).to.have.status(200);
  });

  it("should update a project", async () => {
    const response = await chai.request(app).post("/graphql").send({
      query: `mutation {updateProject(id: "645b3b027d6310e97685a776", name: "Amazon", status: progress){name, status}}`,
    });
    expect(response).to.have.status(200);
  });

  it("should delete a project", async () => {
    const response = await chai.request(app).post("/graphql").send({
      query: `mutation {deleteProject(id: "645b3b027d6310e97685a776"){name, status}}`,
    });
    expect(response).to.have.status(200);
  });

  it("should delete a client", async () => {
    const response = await chai.request(app).post("/graphql").send({
      query: `mutation {deleteClient(id: "645b34ef91d0acf4d48401ce"){name}}`,
    });
    expect(response).to.have.status(200);
  });

  it("create a project", async () => {
    const createProjectResponse = await chai
      .request(app)
      .post("/graphql")
      .send({
        query:
          'mutation { addProject(name: "Test Project", description: "Test Description", clientId: "645b3620c17619da4b7c477b") { id } }',
      });
    expect(createProjectResponse).to.have.status(200);
    expect(createProjectResponse.body).to.be.an("object");
    expect(createProjectResponse.body.data).to.have.property("addProject");
    expect(createProjectResponse.body.data.addProject).to.have.property("id");
  });

  it("create a client", async () => {
    const createClientResponse = await chai.request(app).post("/graphql").send({
      query:
        'mutation { addClient(name: "Test ", email: "test@gmail.com", phone: "123456789") { name } }',
    });

    expect(createClientResponse).to.have.status(200);
    expect(createClientResponse.body).to.be.an("object");
    expect(createClientResponse.body.data).to.have.property("addClient");
    expect(createClientResponse.body.data.addClient).to.have.property("name");
  });
});
