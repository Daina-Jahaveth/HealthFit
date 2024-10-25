import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Survey from './Pages/Survey';
import Plan from './Pages/Plan';
import MonitoringPage from './Pages/MonitoringPage';
import MedicalPage from './Pages/MedicalPage';
import ProfilePage from './Pages/ProfilePage';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
