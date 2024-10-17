const http = require('http');


http.createServer((req, res) => {

    switch (req.url) {
        case '/test':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello, World!');
            break;
        case '/self-destruct':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Goodbye, World!');
            break;
        case '/coffee':
            res.writeHead(418, { 'Content-Type': 'text/plain' });
            res.write('I\'m a teapot');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('404 Not Found');
    }
    res.end();
}
).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
