document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se envíe el formulario

  const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  const nombre = document.getElementById('nombre').value.trim();
  const segundoNombre = document.getElementById('segundoNombre').value.trim();
  const apellidoP = document.getElementById('apellidoP').value.trim();
  const apellidoM = document.getElementById('apellidoM').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validar solo letras
  if (!letrasRegex.test(nombre)) {
    alert('El campo "Nombre" solo debe contener letras');
    return;
  }

  if (segundoNombre !== "" && !letrasRegex.test(segundoNombre)) {
    alert('El campo "Segundo Nombre" solo debe contener letras');
    return;
  }

  if (!letrasRegex.test(apellidoP)) {
    alert('El campo "Apellido Paterno" solo debe contener letras');
    return;
  }

  if (!letrasRegex.test(apellidoM)) {
    alert('El campo "Apellido Materno" solo debe contener letras');
    return;
  }

  // Validar coincidencia de contraseña
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  alert('Registro exitoso');
  e.target.reset(); // Limpia el formulario
});
