const routerCadastro = require('./CadastroRouter');
module.exports = (app) => {
    app.use(routerCadastro);
}