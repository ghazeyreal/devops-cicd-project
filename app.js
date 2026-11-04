const http = require('node:http');

const MESSAGE = 'Hello from my CI/CD application!';

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(MESSAGE);
  });
}

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  createServer().listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { createServer, MESSAGE };