const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>My first server</head>');
        res.write('<body>');
        res.write('<h1>Welcome to node server</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="userName" /><button type="submit">Create User</button></form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>List of users</h1><ul><li>user 1</li><li>user 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            const data = Buffer.concat(body).toString();
            const userName = data.split("=")[1];
            console.log(userName);
        })
        return res.end();
    }
})

server.listen(3000);