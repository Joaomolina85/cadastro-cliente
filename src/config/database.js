const { define } = require("mime");

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
    username: 'root',
    password: '',
    port: '3306',
    database: 'produto_cadastro',
    define: {
        timestamps: false,

    }
}