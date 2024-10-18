import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Importa el archivo CSS
import { login } from '../services/authService'; // Importa el servicio de autenticación

const Admin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      console.log('🚀 Login exitoso:', response);
      navigate('/management');
    } catch (err) {
      setError('Usuario o clave incorrectos');
    }
  };

  return (
    <div className="container text-center mt-5 admin-container">
      <h1 className="admin-title">Bienvenido Administrador</h1>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Clave</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingrese su clave"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
};

export default Admin;