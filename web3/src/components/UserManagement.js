import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setUsername(user.username);
    setPassword('');
    setRole(user.role);
  };

  const handleUpdate = async (id) => {
    const updatedUser = {
      username,
      password: password ? password : undefined, // Only send password if it's changed
      role
    };

    try {
      await axios.put(`http://localhost:5000/users/${id}`, updatedUser);
      setUsers(users.map(user => (user._id === id ? { ...user, username, role } : user)));
      setEditUser(null);
      setUsername('');
      setPassword('');
      setRole('buyer');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      {editUser && (
        <div>
          <h3>Edit User</h3>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="buyer">Buyer</option>
          </select>
          <button onClick={() => handleUpdate(editUser._id)}>Update</button>
        </div>
      )}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} - {user.role}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
