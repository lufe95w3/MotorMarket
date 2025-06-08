// Simulación de base de datos en memoria (esto sería reemplazado por una base de datos real en el backend)
let users = [];
let vehicles = [
  { brand: 'Toyota', year: 2020, price: 20000 },
  { brand: 'Honda', year: 2018, price: 15000 },
  { brand: 'Ford', year: 2021, price: 25000 }
];

// Manejo del registro de usuario
document.getElementById('register-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const role = document.getElementById('register-role').value;

  if (email && password) {
    users.push({ email, password, role });
    alert('Usuario registrado con éxito');
  } else {
    alert('Por favor complete todos los campos');
  }

  document.getElementById('register-form').reset();
});

// Manejo del inicio de sesión
document.getElementById('login-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    alert('Inicio de sesión exitoso');
  } else {
    alert('Credenciales incorrectas');
  }

  document.getElementById('login-form').reset();
});

// Manejo de búsqueda de vehículos
document.getElementById('search-btn')?.addEventListener('click', function() {
  const brand = document.getElementById('search-brand').value.toLowerCase();
  const maxPrice = parseInt(document.getElementById('search-price').value);
  const year = parseInt(document.getElementById('search-year').value);
  
  const results = vehicles.filter(vehicle => {
    return (
      (brand === '' || vehicle.brand.toLowerCase().includes(brand)) &&
      (isNaN(maxPrice) || vehicle.price <= maxPrice) &&
      (isNaN(year) || vehicle.year === year)
    );
  });

  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
  
  results.forEach(vehicle => {
    const div = document.createElement('div');
    div.textContent = `${vehicle.brand} - ${vehicle.year} - $${vehicle.price}`;
    resultsContainer.appendChild(div);
  });
});
