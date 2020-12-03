const net = require('net');

const client = new net.Socket();
client.connect({ port: 58901, host: "localhost" });
client.on('data', (data) => {
    console.log('data', data.toString('utf-8'));
});