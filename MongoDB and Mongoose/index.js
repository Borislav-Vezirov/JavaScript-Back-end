const express = require('express');
const expressConfig = require('./config/express.js');
const routesConfig  = require('./config/routes.js');
const { init: storage } = require('./services/storage.js');

start();

async function start(){

    const app = express();
    const port = 3000;

    expressConfig(app);
    app.use(await storage());
    routesConfig(app);


    app.listen(port, () => console.log('Server listening on port ' + port));
}
