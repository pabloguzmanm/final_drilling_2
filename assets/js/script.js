const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene comportamiento por defecto

  // Valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fechaCotizacion").value;

  if (nombre == "") {
    alert("Debes llenar el campo nombre");
    event.target.nombre.focus();
  }

  if (correo == "") {
    alert("Debes llenar el campo correo");
    event.target.correo.focus();
  }

  if (mensaje == "") {
    alert("Debes llenar el campo mensaje");
    event.target.mensaje.focus();
  }

  if (servicio == "") {
    alert("Debes llenar el campo servicio");
    event.target.servicio.focus();
  }

  if (fecha == "") {
    alert("Debes llenar el campo fecha");
    event.target.fecha.focus();
  }

  if (
    (nombre != "") &
    (correo != "") &
    (mensaje != "") &
    (fecha != "") &
    (servicio != "")
  ) {
    /* Muestra alert con la información cuando se hace el submit */
    const datos_enviados =
      "\n" +
      nombre +
      "\n" +
      correo +
      "\n" +
      mensaje +
      "\n" +
      servicio +
      "\n" +
      fecha;

    alert("Los datos enviados son: " + datos_enviados);

    //limpiar formulario
    form.reset();
  }
});
