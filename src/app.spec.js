const request = require("supertest");
const expressApp = require("../index.js");

describe("Criar um Cadastro", () => {
    it("Criar um cadastro", async () => {
        const response = await request(expressApp).post("/cadastro");
        expect(response.body).toBeDefined();
    });
});

describe("Teste listar todos usuarios", () => {
    it("", async () => {
        const response = await request(expressApp).get("/listarTodosCadastro");
        // expect(response.body).toBe({ok: true});
        expect(response.body).toEqual(expect.objectContaining({ cadastro: expect.any(Array) }));
    });
});

describe("Teste Listar um usuario por cpf", () => {
    it("Listar um usuario", async () => {
        const usercpf = "507.080.428.64";
        const response = await request(expressApp).get(`/listarUmCadastro/${usercpf}`);
        expect(response.body).toBeDefined();
    });
});

describe("Teste de atualizar usuario", () => {
    it("Atualizar cadastro", async () => {
        const usercpf = "507.080.428.64";
        const response = await request(expressApp).put(`/atualizarUmCadastro/${usercpf}`);
        expect(response.body).toBeDefined();
    });
});

describe("Deletar um usuario", () => {
    it("Deletar o cadastro", async () => {
        const usercpf = "507.080.428.64";
        const response = await request(expressApp).delete(`/deletarUmCadastro/${usercpf}`);
        expect(response.statusCode).toBeDefined();
    });
});

