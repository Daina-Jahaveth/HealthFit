// Guardar los datos de la encuesta en localStorage
document.getElementById('health-survey')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const age = document.getElementById('age').value;
  const sex = document.getElementById('sex').value;
  const bodyType = document.getElementById('body-type').value;
  const conditions = {
      diabetes: document.getElementById('diabetes').checked,
      hypertension: document.getElementById('hypertension').checked,
      allergies: document.getElementById('allergies').value || 'Ninguna'
  };

  // Validación básica
  if (!weight || !height || !age) {
      alert('Por favor, completa todos los campos.');
      return;
  }

  // Almacenar datos
  const data = { weight, height, age, sex, bodyType, conditions };
  localStorage.setItem('userData', JSON.stringify(data));

  // Redirigir a plan.html
  window.location.href = 'plan.html';
});

// Cargar los datos del perfil en el formulario de perfil
document.getElementById('profile-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const age = document.getElementById('age').value;

  // Validar
  if (!weight || !height || !age) {
      alert('Por favor, completa todos los campos.');
      return;
  }

  const userData = JSON.parse(localStorage.getItem('userData')) || {};
  userData.weight = weight;
  userData.height = height;
  userData.age = age;

  // Guardar en localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  alert('Perfil actualizado correctamente');
});

// Mostrar el plan personalizado en plan.html
const loadPlan = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const planContainer = document.getElementById('plan-container');

  if (userData) {
      const { weight, bodyType } = userData;
      const exercisePlan = `
          <h3>Plan de Ejercicios</h3>
          <ul>
              <li>Lunes: Cardio (30 minutos de correr).</li>
              <li>Martes: Fuerza (Rutina de pesas).</li>
              <li>Miércoles: Descanso o Yoga.</li>
              <li>Jueves: Cardio (Ciclismo 45 minutos).</li>
              <li>Viernes: Fuerza (Pesas y flexibilidad).</li>
              <li>Sábado: Actividad libre o deportes.</li>
              <li>Domingo: Descanso.</li>
          </ul>
      `;
      const dietPlan = `
          <h3>Dieta Personalizada</h3>
          <ul>
              <li>Desayuno: Avena con frutas y semillas.</li>
              <li>Almuerzo: Pollo a la plancha con quinoa y verduras.</li>
              <li>Cena: Ensalada de garbanzos y aguacate.</li>
              <li>Snack: Frutos secos o yogur natural.</li>
          </ul>
      `;
      planContainer.innerHTML = `
          <div>
              <h2>Tu Plan Personalizado</h2>
              <p>Basado en tus datos, aquí tienes un plan de dieta y ejercicio adaptado a tus necesidades.</p>
              ${dietPlan}
              ${exercisePlan}
          </div>
      `;
  } else {
      planContainer.innerHTML = '<p>No has completado la encuesta aún.</p>';
  }
};

// Cargar plan personalizado al cargar la página
if (document.getElementById('plan-container')) {
  loadPlan();
}
