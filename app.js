const http = require('http');
const fs = require('fs');
const path = require('path');

let materias = [];

function manejarSolicitud(req, res) {
    if (req.url === '/api/materias' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(materias));
    } else if (req.url === '/api/materias' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const nuevaMateria = JSON.parse(body);
            materias.push(nuevaMateria);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(nuevaMateria));
        });
    } else if (req.url === '/' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al leer el archivo.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado.');
    }
}

const server = http.createServer(manejarSolicitud);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
