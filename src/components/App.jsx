import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
