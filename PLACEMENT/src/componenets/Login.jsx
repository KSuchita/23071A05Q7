import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS for styling

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User logged in:', formData);
    
    // Redirect to home or dashboard after login
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Please enter your credentials to log in.</p>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
