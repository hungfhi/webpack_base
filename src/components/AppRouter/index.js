import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Login';
import TestComponent from '../TestComponent';
import NotFound from '../NotFound'; // Import trang 404

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestComponent />} />
        {/* Route cho trang 404, dùng path="*" để bắt các route không tồn tại */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRouter;