const { Client } = require('pg');

const client = new Client('postgresql://postgres:random@localhost/ff8cardgame');

client.connect();

module.exports = client;
