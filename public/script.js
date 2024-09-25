
document.getElementById('materiaForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 

    
    const nombre = document.getElementById('nombre').value;
    const cantidadAlumnos = document.getElementById('cantidadAlumnos').value;

    // Enviar la nueva materia al servidor con una solicitud POST
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, cantidadAlumnos })
    });

    const nuevaMateria = await response.json();
    mostrarMateria(nuevaMateria); // Mostrar la materia en la lista

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('cantidadAlumnos').value = '';
});

// Función para mostrar una materia en la lista
function mostrarMateria(materia) {
    const li = document.createElement('li');
    li.textContent = `${materia.nombre} - ${materia.cantidadAlumnos} alumnos`;
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => eliminarMateria(materia.id, li));
    li.appendChild(eliminarBtn);
    document.getElementById('materiasList').appendChild(li);
}

// Función para eliminar una materia por ID
async function eliminarMateria(id, li) {
    const response = await fetch(`/api/materias/${id}`, { method: 'DELETE' });
    if (response.status === 204) {
        li.remove(); // Remover la materia de la lista
    }
}

// Manejador para eliminar todas las materias
document.getElementById('eliminarTodas').addEventListener('click', async function() {
    await fetch('/api/materias', { method: 'DELETE' });
    document.getElementById('materiasList').innerHTML = ''; // Limpiar la lista
});
