// CONTROLADOR LÓGICO DEL FRONT-END - BIBLIOGEST

function procesarDevolucion(idFila) {
    // 1. Ubicar los elementos de la interfaz en la fila seleccionada
    const fila = document.getElementById(idFila);
    const badge = fila.querySelector('.status-badge');
    const boton = fila.querySelector('.btn-action');

    // 2. Ejecutar cambio lógico de estados de interfaz
    badge.className = "status-badge success";
    badge.textContent = "Devuelto";
    
    // Deshabilitar el botón para evitar doble ejecución
    boton.textContent = "Completado";
    boton.disabled = true;

    // 3. Capturar y actualizar los contadores matemáticos de las tarjetas de métricas
    let totalPrestados = parseInt(document.getElementById('txt-prestados').textContent);
    let totalDisponibles = parseInt(document.getElementById('txt-disponibles').textContent);

    // Ajustar valores matemáticos en tiempo real
    if (totalPrestados > 0) {
        document.getElementById('txt-prestados').textContent = totalPrestados - 1;
        document.getElementById('txt-disponibles').textContent = totalDisponibles + 1;
    }

    // Alerta interactiva de confirmación de usabilidad
    alert("Transacción procesada: El ejemplar ingresó con éxito al inventario físico.");
}
