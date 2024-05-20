document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const nombre = document.getElementById("nombre");
    const cedula = document.getElementById("cedula");
    const correo = document.getElementById("correo");

    if (!nombre.value.trim()) {
      nombre.classList.add("is-invalid");
      isValid = false;
    } else {
      nombre.classList.remove("is-invalid");
    }

    if (cedula.value.trim().length !== 10) {
      cedula.classList.add("is-invalid");
      isValid = false;
    } else {
      cedula.classList.remove("is-invalid");
    }

    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(correo.value)) {
      correo.classList.add("is-invalid");
      isValid = false;
    } else {
      correo.classList.remove("is-invalid");
    }

    if (isValid) {
      window.location.href = "index.html";
    }
  });
