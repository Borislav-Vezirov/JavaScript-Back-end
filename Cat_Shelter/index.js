const http = require('http');

const app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.write('<h1>Home Page</h1>');
            break;
        case '/cats':
            res.write('<h1>Cats Page</h1>');
            break;

        default:
            res.write('<h1>Error 404</h1>')
            break;
    }
    
    res.end();
});

app.listen(3000, () => console.log('Server is starting on port http://localhost:3000'));