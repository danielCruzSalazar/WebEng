
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Perdon, No tienes permisos para registrarte.</p>
      <Link to="/eventos/expo-ingenierias">Volver a la página de inicio</Link>
    </div>
  );
};

export default NotFound;
