import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setUsername(user.username);
    setRole(user.role);
    setPassword(''); // Clear password field
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { username, password, role };
    try {
      await axios.put(`http://localhost:5000/users/${editingUser}`, updatedUser);
      setMessage('Usuario actualizado exitosamente!');
      setEditingUser(null);
      setUsername('');
      setPassword('');
      setRole('buyer');
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage('Error actualizando el usuario');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setMessage('Usuario eliminado exitosamente!');
      fetchUsers();
    } catch (error) {
      console.error('Error eliminando el usuario:', error);
      setMessage('Error eliminando el usuario');
    }
  };

  return (
    <div className="user-management-container">
      <h2>Gestión de Usuarios</h2>
      {message && <p className="message">{message}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Editar</button>
                <button onClick={() => handleDelete(user._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && (
        <div className="edit-form-container">
          <h3>Editar Usuario</h3>
          <form onSubmit={handleUpdate} className="edit-form">
            <input
              type="text"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Nueva Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="buyer">Comprador</option>
              <option value="admin">Administrador</option>
            </select>
            <button type="submit">Actualizar</button>
            <button type="button" onClick={() => setEditingUser(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
