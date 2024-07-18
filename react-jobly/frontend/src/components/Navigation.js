import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </nav>
  );
}

export default Navigation;
