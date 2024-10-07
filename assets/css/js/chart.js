const renderWeightChart = (data) => {
  const ctx = document.getElementById('weight-chart').getContext('2d');
  new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
          datasets: [{
              label: 'Peso (kg)',
              data: data,  // Array con los datos de peso
              borderColor: 'rgba(255, 206, 86, 1)',
              backgroundColor: 'rgba(255, 206, 86, 0.2)',  // Fondo del gráfico
              borderWidth: 2,
              fill: true
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: false,
                  title: {
                      display: true,
                      text: 'Peso en kg'
                  }
              }
          },
          responsive: true,
          plugins: {
              tooltip: {
                  enabled: true,
                  mode: 'index',
                  intersect: false
              },
              legend: {
                  position: 'top',
              },
          },
          interaction: {
              mode: 'nearest',
              axis: 'x'
          }
      }
  });
};

const loadWeightProgress = () => {
  const userWeightData = JSON.parse(localStorage.getItem('userWeightData')) || [70, 69.5, 69.3, 69, 68.8, 68.5, 68.2];
  renderWeightChart(userWeightData);
};

// Verificar si el gráfico existe y cargar los datos
if (document.getElementById('weight-chart')) {
  loadWeightProgress();
}
