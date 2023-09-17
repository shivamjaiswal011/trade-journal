// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Dashboard from '../components/Dashboard';
import PortfolioAnalysis from '../components/PortfolioAnalysis';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<PortfolioAnalysis />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
