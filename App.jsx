// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import VendorPage from './pages/vendorPage.jsx';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vendors" element={<VendorPage />} />
          {/* You can add more routes later like:
              <Route path="/weddings" element={<WeddingsPage />} />
              <Route path="/birthdays" element={<BirthdayPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
