import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
import QrRes from './QrRes';
import Result from './Result';
import Test from './Test';

export default function App({
  qsts, results, user, id,
}) {
  console.log(user, 'AAAAAAAAA');
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test qsts={qsts} user={user} />} />
        <Route path="/result/:id" element={<Result id={id} />} />
        <Route path="/result/:id/result" element={<QrRes user={user} results={results} qsts={qsts} />} />
      </Routes>
    </div>
  );
}
