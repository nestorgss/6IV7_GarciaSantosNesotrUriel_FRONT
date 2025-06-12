document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const userRegex = /^[a-zA-Z0-9_]+$/; // Letras, números y guion bajo

  const nombre = document.getElementById('nombre').value.trim();
  const segundoNombre = document.getElementById('segundoNombre').value.trim();
  const apellidoP = document.getElementById('apellidoP').value.trim();
  const apellidoM = document.getElementById('apellidoM').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

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
  if (!userRegex.test(username)) {
    alert('El campo "Usuario" solo debe contener letras, números y guion bajo');
    return;
  }
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Verificar si el usuario existe
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const exists = users.find(user => user.username === username);
  if (exists) {
    alert('El usuario ya existe');
    return;
  }

  users.push({
    username,
    nombre,
    segundoNombre,
    apellidoP,
    apellidoM,
    password
  });

  localStorage.setItem('users', JSON.stringify(users));
  alert('Registro exitoso');
  e.target.reset();
  window.location.href = "bienvenida.html";
});
btn.className = "cerrar-sesion-btn";
