import React, { useState } from 'react';

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

