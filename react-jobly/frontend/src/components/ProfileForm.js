import React, { useState, useContext } from 'react';
import UserContext from '../auth/UserContext';

function ProfileForm({ handleUpdate }) {
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default ProfileForm;


