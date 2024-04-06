const Cadastro = require('../models/Cadastro.js');

const cadastro = {
    async create(req, res) {
        if (!req.body.Nome) {
            return res.status(400).json({ msg: 'O nome não pode estar vazio!' })
        }
        if (!req.body.Email) {
            return res.status(400).json({ msg: 'O email não pode estar vazio!' })
        }
        if (!req.body.Nascimento) {
            return res.status(400).json({ msg: 'A data de nascimento não pode estar vazio!' })
        }
        if (!req.body.cpf) {
            return res.status(400).json({ msg: 'O cpf não pode estar vazio!' })
        }

        const verificarCadastro = await Cadastro.findOne({ where: { cpf: req.body.cpf } });
        if (verificarCadastro) {
            return res.status(400).json({ msg: 'Ja existe um cadastro com esse cpf!' })
        }

        try {
            const cadastroUsuario = await Cadastro.create({
                Nome: req.body.Nome,
                Senha: req.body.Senha,
                Email: req.body.Email,
                Nascimento: req.body.Nascimento,
                Telefone: req.body.Telefone,
                cpf: req.body.cpf
            });

            return res.status(200).json({ msg: 'Sucesso ao cadastrar!', cadastroUsuario });

        } catch (error) {
            console.log(error)
            return res.status(400).json({ msg: 'Falha ao cadastrar!' })
        }

    },

    async get(req, res) {
        try {
            const cadastro = await Cadastro.findAll();
            return res.status(200).json({ cadastro })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ msg: 'Falha ao buscar!' })
        }
    },

    async getOne(req, res) {
        try {
            const cpf = req.params.cpf;
            const cadastro = await Cadastro.findOne({ where: { cpf: cpf }, });
            console.log(cadastro);
            console.log(req.params.cpf);
            if (cadastro) {
                return res.status(200).json({ cadastro })
            } else {
                return res.status(400).json({ msg: 'Não foi possivel achar esse cadastro!' })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({ msg: 'Falha ao buscar!' })
        }
    },

    async update(req, res) {
        const cpf = req.params.cpf;
        const cadastro = await Cadastro.update(
            {
                Nome: req.body.Nome,
                Senha: req.body.Senha,
                Email: req.body.Email,
                Nascimento: req.body.Nascimento,
                Telefone: req.body.Telefone,
            },
            { where: { cpf: cpf } });
            if(cadastro){
                return res.status(200).json({ msg: 'Sucesso ao atualizar!' })
            }else{
                return res.status(400).json({ msg: 'Não foi possivel achar esse cadastro!' })
            }
    },

    async delete(req, res) {
        try {
            const cpf = req.params.cpf;
            const cadastro = await Cadastro.destroy({ where: { cpf: cpf }, });
            if (cadastro) {
                return res.status(200).json({ msg: 'Sucesso ao deletar!' })
            } else {
                return res.status(400).json({ msg: 'Não foi possivel achar esse cadastro!' })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({ msg: 'Falha ao deletar!' })
        }
    }
};

module.exports = cadastro;