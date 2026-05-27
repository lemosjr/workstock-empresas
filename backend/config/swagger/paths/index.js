const authPaths = require('./auth.paths');
const userPaths = require('./user.paths');
const servicePaths = require('./service.paths');
const empresaPaths = require('./empresa.paths');
const historicoPaths = require('./historico.paths');
const postagemPaths = require('./postagem.paths');

const paths = {
    ...authPaths,
    ...userPaths,
    ...servicePaths,
    ...empresaPaths,
    ...historicoPaths,
    ...postagemPaths
};

module.exports = paths;
