import React, { useState } from 'react';
import axios from 'axios';

const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password
    };

    try {
      const response = await axios.post('http://localhost:5000/register/admin', newUser);
      console.log(response.data);
      setMessage('Administrador registrado exitosamente!');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Hubo un error registrando al administrador!', error);
      setMessage('Error registrando al administrador');
    }
  };

  return (
    <div className="register-form">
      <h2>Registrar Administrador</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre de usuario" 
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default AdminRegister;
