const Sentry = require("@sentry/node");
const express = require('express');
const { connection } = require('./database/connection');
const routes = require('./routes');
const cors = require('cors');


class Server {
    constructor(server = express()) {

        
        this.middlewares(server);
        this.database();
        this.initializeSentry();
        this.allRoutes(server);
        this.initializeServer(server);
        
    }

    initializeSentry() {
        Sentry.init({
            dsn: 'https://328f1142106d483904564bf2431f9d20@o4505801595944960.ingest.sentry.io/4505801794912256',
            
        });
    }

    async middlewares(app) {
        app.use(cors());
        app.use(express.json());
    }

    async database() {
        try {
            await connection.authenticate();
            console.log('Conexão bem sucedida!');
        } catch (error) {
            console.error('Não foi possível se conectar', error);
        }
    }



    async initializeServer(app) {
        const PORT = 3333;
        app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`));
    }

    async allRoutes(app) {
        app.use(Sentry.Handlers.requestHandler());
        app.use(Sentry.Handlers.errorHandler());

        app.use(routes);
    }
}

module.exports = { Server };
