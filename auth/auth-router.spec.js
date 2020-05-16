const request = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

describe("POST /register", () => {
  beforeEach(async () => {
    await db("users").truncate()
  });
  it("201", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "tatyana", password: "123abc" });
    expect(res.status).toBe(201);
  });
  it("object", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "tatyana", password: "123abc" });
    expect(res.type).toBe("application/json");
  });
});

describe("POST /login", () => {
  it("200", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "tatyana", password: "123abc" });
    expect(res.status).toBe(200);
  });
  it("object", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "tatyana", password: "123abc" });
    expect(res.type).toBe("application/json");
  });
});

describe("GET /jokes", () => {
  it("error", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res.status).toBe(401);
  });
  it("object", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res.type).toBe("application/json");
  });
});