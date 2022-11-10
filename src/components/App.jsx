import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Result from './Result';
import Test from './Test';

export default function App({ qsts, results }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test qsts={qsts} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}
