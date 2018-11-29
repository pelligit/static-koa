const Koa = require('koa');
const path = require('path');

const app = new Koa();
const port = 3001;

const serve = require('koa-static');

const publicFiles = serve(path.join(__dirname, 'www'));
publicFiles._name = 'static /www';

app.use(publicFiles);

app.listen(port);
