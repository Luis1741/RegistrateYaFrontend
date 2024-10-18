import React from 'react';
import { Link } from 'react-router-dom';
import './Employee.css'; // Importa el archivo CSS
const Employee: React.FC = () => {
  return (
    <div className="container text-center mt-5 employee-container">
      <h1 className="employee-title">Panel de Empleado</h1>
      <div className="employee-buttons">
        <Link to="/employee" className="btn btn-success btn-lg">Empleado</Link>
      </div>
    </div>
  );
};

export default Employee;