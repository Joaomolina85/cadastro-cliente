const express = require('express');
const Router = express.Router();
const cadastroController = require('../controllers/CadastroController.js');

Router.post('/cadastro', cadastroController.create);
Router.get('/listarTodosCadastro', cadastroController.get);
Router.get('/listarUmCadastro/:cpf', cadastroController.getOne);
Router.put('/atualizarUmCadastro/:cpf', cadastroController.update);
Router.delete('/deletarUmCadastro/:cpf', cadastroController.delete);

module.exports = Router