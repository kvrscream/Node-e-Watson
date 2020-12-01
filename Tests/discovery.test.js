const request = require("supertest");
const ibmController = require("../controllers/ibmController");

test("Verifica se retorna os workspaces", () => {
    return ibmController.getWorkspaces().then((response) => {
        expect(response).not.toBeNull()
    });
});


test("Deve retornar status 200 na requisição e o message deve voltar com sucesso ou erro", () => {
    return ibmController.sendMessage("1f32bf57-467d-4316-a024-6aecf53f6767")
        .then((response) => {
            expect(response).not.toBeNull();
        });
})
