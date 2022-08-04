const express = require('express'); 
const dotenv = require('dotenv');
const mustache = require('mustache-express');
const path = require('path');
/* 
Criando a variavel server que vai armazenar o express
*/
const server = express();

//importando mainRoutes que será o arquivo da nossa rota
const mainRoutes = require('./routes/index');

dotenv.config();
//Configurando mustache
//diretoria onde colocamos arquivos e nossas images
server.set('view engine','mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());
server.use(express.static(path.join(__dirname,'../public')));
//usando rota importada
server.use(mainRoutes);
//escutando a porta que colocamos no .env
server.listen(process.env.PORT);