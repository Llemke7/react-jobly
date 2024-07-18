import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Companies from '../components/Companies';
import Jobs from '../components/Jobs';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import ProfileForm from '../components/ProfileForm';
import CompanyDetail from '../components/CompanyDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
    </Routes>
  );
}

export default AppRoutes;



