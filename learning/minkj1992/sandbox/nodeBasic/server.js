import http from 'http';

http
  .createServer((req, res) => {
    console.log('Hello visitor');

    res.write('<h1>Hello Node</h1>');
    res.end('<p>Hello Server</p>');
  })
  .listen(8080, () => {
    console.log('Server is running at 127.0.0.1:8080');
  });
