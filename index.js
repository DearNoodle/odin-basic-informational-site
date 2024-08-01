import http from 'http';
import fs from 'fs';

const PORT = 8080;

const server = http.createServer((req, res) => {
  let fileName;
  if (req.url === '/') {
    fileName = './index' + '.html';
  } else {
    fileName = '.' + req.url + '.html';
  }

  fs.readFile(fileName, (err, content) => {
    if (err) {
      fs.readFile('./404.html', (err, content) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT);
