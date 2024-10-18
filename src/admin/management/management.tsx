import React from 'react';
import { Link } from 'react-router-dom';
import './Management.css'; // Importa el archivo CSS

const Management: React.FC = () => {
  return (
    <div className="container text-center mt-5 management-container">
      <h1 className="management-title">Panel de Administración</h1>
      <div className="management-buttons d-flex flex-column align-items-center">
        <Link to="/manage-employees" className="btn btn-primary btn-lg mb-3">Gestión de Empleados</Link>
        <Link to="/reports" className="btn btn-secondary btn-lg mb-3">Reportes</Link>
      </div>
    </div>
  );
};

export default Management;