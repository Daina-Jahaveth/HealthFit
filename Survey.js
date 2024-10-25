// src/Pages/Survey.js

import React, { useState } from 'react';
import './Survey.css';

const Survey = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'Hombre',
    medicalConditions: [],
    allergies: [],
    goal: '',
    bodyType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev[name], e.target.value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name].filter((item) => item !== e.target.value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío de datos
    console.log(formData);
  };

  return (
    <div className="survey-container">
      <h1>Encuesta de Salud</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Peso (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Altura (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sexo:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
        </div>
        <div className="form-group">
          <label>Condiciones Médicas:</label>
          <label>
            <input
              type="checkbox"
              value="Diabetes"
              name="medicalConditions"
              onChange={handleCheckboxChange}
            />
            Diabetes
          </label>
          <label>
            <input
              type="checkbox"
              value="Hipertensión"
              name="medicalConditions"
              onChange={handleCheckboxChange}
            />
            Hipertensión
          </label>
          <label>
            <input
              type="checkbox"
              value="Problemas cardíacos"
              name="medicalConditions"
              onChange={handleCheckboxChange}
            />
            Problemas cardíacos
          </label>
        </div>
        <div className="form-group">
          <label>Alergias:</label>
          <label>
            <input
              type="checkbox"
              value="Gluten"
              name="allergies"
              onChange={handleCheckboxChange}
            />
            Gluten
          </label>
          <label>
            <input
              type="checkbox"
              value="Lácteos"
              name="allergies"
              onChange={handleCheckboxChange}
            />
            Lácteos
          </label>
        </div>
        <div className="form-group">
          <label>Objetivo:</label>
          <select name="goal" value={formData.goal} onChange={handleChange}>
            <option value="">Selecciona tu objetivo</option>
            <option value="Mantener peso">Mantener peso</option>
            <option value="Ganar músculo">Ganar músculo</option>
            <option value="Bajar de peso">Bajar de peso</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de cuerpo:</label>
          <select name="bodyType" value={formData.bodyType} onChange={handleChange}>
            <option value="">Selecciona tu tipo de cuerpo</option>
            <option value="Ectomorfo">Ectomorfo</option>
            <option value="Mesomorfo">Mesomorfo</option>
            <option value="Endomorfo">Endomorfo</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Enviar Encuesta</button>
      </form>
    </div>
  );
};

export default Survey;
