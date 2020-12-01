const request = require("supertest");
const app = require("../config/server");


test("Deve retornar 200 se a api estiver no ar", () => {
    return request(app).get("/")
            .then((result) => {
                expect(result.status).toBe(200)
            });
});