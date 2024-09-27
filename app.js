const http = require('http'); // Para crear el servidor HTTP
const fs = require('fs');     // Para manejar archivos
const path = require('path'); // Para manejar rutas de archivos

// Simulamos una base de datos en memoria para las materias
let materias = [];

// Función para manejar solicitudes HTTP
function manejarSolicitud(req, res) {
    // Obtener la lista de todas las materias (GET /api/materias)
    if (req.url === '/api/materias' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(materias)); // Devolvemos las materias en formato JSON

    // Obtener una materia específica por ID (GET /api/materias/:id)
    } else if (req.url.startsWith('/api/materias/') && req.method === 'GET') {
        const id = req.url.split('/')[3]; // Obtenemos el ID desde la URL
        const materia = materias.find(m => m.id == id); // Buscamos la materia por ID
        if (materia) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(materia)); // Devolvemos la materia encontrada
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Materia no encontrada' }));
        }

    // Agregar una nueva materia (POST /api/materias)
    } else if (req.url === '/api/materias' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; }); // Acumulamos los datos
        req.on('end', () => {
            const nuevaMateria = JSON.parse(body); // Convertimos el cuerpo a JSON
            nuevaMateria.id = materias.length + 1; // Asignamos un ID único
            materias.push(nuevaMateria); // Agregamos la nueva materia al array
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(nuevaMateria)); // Devolvemos la nueva materia
        });

    // Eliminar todas las materias (DELETE /api/materias)
    } else if (req.url === '/api/materias' && req.method === 'DELETE') {
        materias = []; // Vaciamos el array de materias
        res.writeHead(204); // No devolvemos contenido
        res.end();

    // Eliminar una materia específica por ID (DELETE /api/materias/:id)
    } else if (req.url.startsWith('/api/materias/') && req.method === 'DELETE') {
        const id = req.url.split('/')[3]; // Obtenemos el ID desde la URL
        const index = materias.findIndex(m => m.id == id); // Buscamos el índice de la materia
        if (index !== -1) {
            materias.splice(index, 1); // Eliminamos la materia del array
            res.writeHead(204); // No devolvemos contenido
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Materia no encontrada' }));
        }

    // Servir el archivo HTML principal (GET /)
    } else if (req.url === '/' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'index.html'); // Servimos index.html desde la raíz
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al leer el archivo.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data); // Enviamos el contenido del archivo HTML
            }
        });

    // Si la ruta no es encontrada, devolvemos un 404
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Recurso no encontrado.');
    }
}

// Crear el servidor HTTP
const server = http.createServer(manejarSolicitud);

// El servidor escucha en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
