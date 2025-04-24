
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ColumnPage from './pages/ColumnPage';


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/column" element={<ColumnPage />} />
      </Routes>
    </Router>
  );
}


