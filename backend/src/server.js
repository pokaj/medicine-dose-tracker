require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);

console.log(`The server is running on port ${port}`);