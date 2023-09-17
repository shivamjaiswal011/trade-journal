// src/components/PortfolioAnalysis.tsx
import React from 'react';

const PortfolioAnalysis: React.FC = () => {
  return (
    <div className="flex">
      {/* Navigation Bar */}
      <div className="w-1/5 bg-gray-200 h-screen">
        <ul className="mt-6">
          <li className="mb-4">
            <a href="#">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="#">Portfolio Analysis</a>
          </li>
        </ul>
      </div>
      {/* Portfolio Analysis Content */}
      <div className="w-4/5 p-8">
        {/* Add your portfolio analysis content here */}
      </div>
    </div>
  );
};

export default PortfolioAnalysis;
