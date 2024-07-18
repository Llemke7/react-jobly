import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

