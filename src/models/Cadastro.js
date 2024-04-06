const { Model, DataTypes } = require('sequelize');

class Cadastro extends Model {
    static init(sequelize) {
        super.init(
            {
                Id: {
                    type: DataTypes.INTEGER(10),
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                Nome: {
                    type: DataTypes.STRING(250),
                    primaryKey: false,
                    allowNull: false,
                    autoIncrement: false,
                },
                Senha: {
                    type: DataTypes.STRING(250),
                    primaryKey: false,
                    allowNull: false,
                    autoIncrement: false,
                },
                Email: {
                    type: DataTypes.STRING(250),
                    primaryKey: false,
                    allowNull: false,
                    autoIncrement: false,
                },
                Nascimento: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    autoIncrement: false,
                    primaryKey: false,
                },
                Telefone: {
                    type: DataTypes.STRING(250),
                    primaryKey: false,
                    allowNull: true,
                    autoIncrement: false,
                },
                cpf: {
                    type: DataTypes.STRING(250),
                    primaryKey: false,
                    allowNull: false,
                    autoIncrement: false,
                },
            },
            {
                sequelize,
                tableName: 'cadastro'
            },
        )
    }
}

module.exports = Cadastro;