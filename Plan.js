// Ubicación: /client/src/pages/Plan.js
import { useEffect, useState } from 'react';

const Plan = () => {
  const [dietPlan, setDietPlan] = useState(null);
  const [exercisePlan, setExercisePlan] = useState(null);

  useEffect(() => {
    // Llamada al backend para obtener los planes basados en los datos del usuario
    fetch('/api/plan')
      .then((res) => res.json())
      .then((data) => {
        setDietPlan(data.diet);
        setExercisePlan(data.exercise);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!dietPlan || !exercisePlan) return <div>Cargando plan...</div>;

  return (
    <div>
      <h2>Tu Plan Personalizado</h2>
      <div>
        <h3>Plan de Dieta</h3>
        {dietPlan.meals.map((meal, index) => (
          <div key={index}>
            <h4>{meal.name}</h4>
            <p>{meal.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Plan de Ejercicio</h3>
        {exercisePlan.routines.map((routine, index) => (
          <div key={index}>
            <h4>{routine.name}</h4>
            <p>{routine.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
