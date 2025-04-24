
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ColumnPage from './pages/ColumnPage';
import MyRecordPage from './pages/MyRecordPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/column" element={<ColumnPage />} />
        <Route path="/my-record" element={<MyRecordPage />} />
      </Routes>
    </Router>
  );
}


