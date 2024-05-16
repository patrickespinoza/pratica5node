const prompt = require("prompt-sync")();

// Función para comenzar el proceso de ingreso de nombres
function ingresarNombres(nombres) {
  while (true) {
    const nombre = prompt("Ingresa un nombre (escribe 'fin' para finalizar): ");
    if (nombre.toLowerCase() === "fin") {
      // Mostrar la información final
      mostrarInformacion(nombres);
      break;
    }
    nombres.push(nombre);
  }
}

// Función para mostrar la información final
function mostrarInformacion(nombres) {
  const cantidadNombres = nombres.length;
  const hayRepetidos = tieneRepetidos(nombres);
  const nombreMasLargo = obtenerNombreMasLargo(nombres);
  const nombreMasCorto = obtenerNombreMasCorto(nombres);

  console.log(`Cantidad de nombres ingresados: ${cantidadNombres}`);
  console.log(`¿Hay al menos un valor repetido? ${hayRepetidos ? "Sí" : "No"}`);
  console.log(`Nombre más largo: ${nombreMasLargo}`);
  console.log(`Nombre más corto: ${nombreMasCorto}`);
}

// Función para verificar si hay nombres repetidos
function tieneRepetidos(nombres) {
  return new Set(nombres).size !== nombres.length;
}

// Función para obtener el nombre más largo
function obtenerNombreMasLargo(nombres) {
  return nombres.reduce((nombreMasLargo, nombreActual) => {
    return nombreActual.length > nombreMasLargo.length
      ? nombreActual
      : nombreMasLargo;
  }, "");
}

// Función para obtener el nombre más corto
function obtenerNombreMasCorto(nombres) {
  return nombres.reduce((nombreMasCorto, nombreActual) => {
    return nombreActual.length < nombreMasCorto.length || nombreMasCorto === ""
      ? nombreActual
      : nombreMasCorto;
  }, "");
}

// Iniciar el proceso de ingreso de nombres
// console.log('Ingresa los nombres (Escribe "fin" para finalizar):');
ingresarNombres([]);
