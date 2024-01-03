import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';

import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
