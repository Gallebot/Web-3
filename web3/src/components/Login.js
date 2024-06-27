import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.success) {
        if (response.data.role === 'admin') {
          navigate('/user-management');
        } else {
          navigate('/');
        }
      } else {
        setMessage('NO FUE POSIBLE INICIAR SESION');
      }
    } catch (error) {
      setMessage('Error en la solicitud');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Correo" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <button onClick={handleRegister}>Regístrate</button>
    </div>
  );
};

export default Login;
