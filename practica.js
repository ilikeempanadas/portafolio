/* =========================================================
   REGISTRO DE ESTUDIANTES 11-1
   JavaScript moderno y organizado
   ========================================================= */

/* 
   Datos de estudiantes
   Aquí puedes agregar más estudiantes fácilmente
*/
const estudiantes = [
    {
        id: 1,
        nombre: "Sofía Martínez",
        promedio: 4.8,
        puesto: 1,
        faltas: ["2026-03-12", "2026-04-08"]
    },

    {
        id: 2,
        nombre: "Juan David Gómez",
        promedio: 4.6,
        puesto: 2,
        faltas: ["2026-02-18"]
    },

    {
        id: 3,
        nombre: "Valentina Ríos",
        promedio: 4.5,
        puesto: 3,
        faltas: []
    },

    {
        id: 4,
        nombre: "Mateo Herrera",
        promedio: 4.2,
        puesto: 4,
        faltas: ["2026-01-30", "2026-05-02", "2026-05-10"]
    },

    {
        id: 5,
        nombre: "Camila Torres",
        promedio: 3.9,
        puesto: 5,
        faltas: ["2026-03-25"]
    }
];

/* =========================================================
   SELECCIONAR TABLA
   ========================================================= */

const tabla = document.querySelector("table");

/* =========================================================
   CREAR FILAS DINÁMICAMENTE
   ========================================================= */

function mostrarEstudiantes() {

    estudiantes.forEach(estudiante => {

        // Crear fila
        const fila = document.createElement("tr");

        // Mostrar faltas
        const faltasTexto =
            estudiante.faltas.length > 0
            ? estudiante.faltas.join(", ")
            : "No faltó 😎";

        // Insertar contenido
        fila.innerHTML = `
            <td>${estudiante.id}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.promedio}</td>
            <td>#${estudiante.puesto}</td>
            <td>${faltasTexto}</td>
        `;

        // Agregar fila a la tabla
        tabla.appendChild(fila);
    });
}

/* =========================================================
   RESALTAR MEJOR PROMEDIO
   ========================================================= */

function resaltarMejorPromedio() {

    const filas = document.querySelectorAll("tr");

    filas.forEach((fila, index) => {

        // Saltar encabezado
        if(index === 0) return;

        const puesto = fila.children[3].textContent;

        // Resaltar al estudiante en puesto #1
        if(puesto === "#1"){

            fila.style.background =
                "linear-gradient(90deg, rgba(255,215,0,0.2), rgba(255,255,255,0))";

            fila.style.fontWeight = "bold";
        }
    });
}

/* =========================================================
   MENSAJE DE BIENVENIDA
   ========================================================= */

function mostrarMensaje() {

    console.log("Sistema de estudiantes cargado correctamente 🚀");
}

/* =========================================================
   INICIAR SISTEMA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    mostrarEstudiantes();

    resaltarMejorPromedio();

    mostrarMensaje();
});