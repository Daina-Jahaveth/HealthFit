// Ubicación: /client/src/pages/MonitoringPage.js
import { useState, useEffect } from 'react';

const MonitoringPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Cargar datos de monitoreo desde el servidor
    fetch('/api/monitoring')
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Monitoreo Diario</h2>
      <div>
        {logs.map((log, index) => (
          <div key={index}>
            <p>{log.date}: {log.weight}kg, {log.calories} cal, Ejercicio: {log.exerciseCompleted ? 'Completado' : 'No completado'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringPage;
