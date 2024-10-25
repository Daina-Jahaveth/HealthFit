// src/Pages/Home.js

import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [greetingDisplayed, setGreetingDisplayed] = useState(false); // Estado para controlar el saludo

  useEffect(() => {
    if (!greetingDisplayed) {
      const speech = new SpeechSynthesisUtterance("Hola, soy tu asistente. ¿Quieres comenzar con el registro?");
      speech.lang = 'es-ES'; // Cambiar a español
      window.speechSynthesis.speak(speech);
      setGreetingDisplayed(true); // Marcar el saludo como mostrado
    }
  }, [greetingDisplayed]);

  return (
    <div className="home-container">
      <h1>Bienvenido a HealthFit</h1>
      <div className="planet-container">
        <div className="planet" />
      </div>
      <div className="options">
        <a href="/survey">
          <div className="button">¡Empieza tu plan personalizado!</div>
        </a>
        <a href="/monitoring">
          <div className="button">Monitoreo</div>
        </a>
        <a href="/medical">
          <div className="button">Cuidado médico</div>
        </a>
        <a href="/profile">
          <div className="button">Mi Perfil</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
