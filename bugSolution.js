const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//This shows using a modern approach and handle errors
const https = require('https');

const options = {
  hostname: 'www.example.com',
  path: '/',
  method: 'GET'
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });

}).on('error', error => {
  console.error(error);
});

req.end();