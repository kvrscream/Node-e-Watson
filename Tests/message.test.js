const request = require("supertest");
const app = require("../config/server");

test("Deve retornar status 200 na requisição e o message deve voltar com sucesso ou erro", () => {
    return request(app).get("/message/:teste")
        .then((response) => {
            expect(response.status).toBe(200);
            expect(response.message).not.toBeNull();
        });
})

