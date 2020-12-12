import http from 'http';
import fs from 'fs';

const baseDir = './home.html';
const server = http
  .createServer((req, res) => {
    console.log('Hello visitor');
    fs.readFile(baseDir, (err, data) => {
      if (err) {
        throw err;
      }
      // buffer end
      res.end(data);
    });
  })
  .listen(8080);

// add event listener
server.on('listening', () => {
  console.log('Server is running at http://127.0.0.1:8080');
});

server.on('error', (err) => {
  console.error(err);
});
