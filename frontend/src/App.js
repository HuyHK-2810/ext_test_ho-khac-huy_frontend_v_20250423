
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


import LoginPage from './pages/LoginPage';
import MyPage from './pages/myPage/MyPage';


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MyPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}


