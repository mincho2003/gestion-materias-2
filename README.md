# Gestión de Materias

Esta aplicación permite gestionar materias, incluyendo la creación, actualización, eliminación y búsqueda de materias, así como el cálculo del total de alumnos.

## Funcionalidades

1. **Registrar Materia**: Permite agregar nuevas materias con su respectivo nombre y cantidad de alumnos.
2. **Buscar Materia por Nombre**: Permite buscar materias que contengan una cadena específica en su nombre.
3. **Mostrar Total de Alumnos**: Muestra el total de alumnos sumando la cantidad de alumnos de todas las materias.
4. **Eliminar Materia**: Permite eliminar materias individuales o todas las materias registradas.

## Pruebas y Validación

### 1. Registrar Materia

**Descripción**: Esta funcionalidad permite agregar una nueva materia.

**Caso de prueba**:
- Ingresar el nombre de la materia: "Matemáticas"
- Ingresar la cantidad de alumnos: "30"
- Hacer clic en "Agregar Materia"

**Resultado esperado**:
- La materia "Matemáticas" debe aparecer en la lista con "30 alumnos".
  
![Registrar Materia](captura-registrar-materia.png)

### 2. Buscar Materia por Nombre

**Descripción**: Esta funcionalidad permite buscar materias por nombre.

**Caso de prueba**:
- Ingresar el nombre a buscar: "Matemáticas"
- Hacer clic en "Buscar Materias"

**Resultado esperado**:
- Debe mostrarse "Matemáticas - 30 alumnos" en los resultados de búsqueda.

![Buscar Materia](captura-buscar-materia.png)

### 3. Mostrar Total de Alumnos

**Descripción**: Esta funcionalidad permite mostrar el total de alumnos registrados.

**Caso de prueba**:
- Hacer clic en "Mostrar Total de Alumnos"

**Resultado esperado**:
- Debe mostrarse el total de alumnos: "Total de alumnos: 30" (suponiendo que solo se ha agregado una materia).

![Total de Alumnos](captura-total-alumnos.png)

### 4. Eliminar Materia

**Descripción**: Esta funcionalidad permite eliminar materias individuales o todas las materias.

**Caso de prueba**:
- Hacer clic en "Eliminar" junto a la materia "Matemáticas".

**Resultado esperado**:
- La materia "Matemáticas" debe desaparecer de la lista.

![Eliminar Materia](captura-eliminar-materia.png)

### 5. Eliminar Todas las Materias

**Descripción**: Esta funcionalidad permite eliminar todas las materias registradas.

**Caso de prueba**:
- Hacer clic en "Eliminar Todas las Materias".

**Resultado esperado**:
- La lista de materias debe estar vacía.

![Eliminar Todas las Materias](captura-eliminar-todas-materias.png)

## Instalación

Para ejecutar esta aplicación, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/gestion-materias.git
   cd gestion-materias
