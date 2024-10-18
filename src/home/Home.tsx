import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa el archivo CSS

const Home: React.FC = () => {
  return (
    <div className="container text-center mt-5 home-container">
      <h1 className="home-title">Bienvenido a <br /> Registrate Ya!</h1>
      <p className="home-subtitle">Elige el tipo de usuario:</p>
      <div className="home-buttons">
        <Link to="/admin" className="btn btn-primary btn-lg">Administrador</Link>
        <p>ó</p>
        <Link to="/employee" className="btn btn-success btn-lg">Empleado</Link>
      </div>
    </div>
  );
};

export default Home;