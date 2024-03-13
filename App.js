import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div>
          <Navbar />
        </div>
        {/* Main Content */}
        <div className="App-content">
          <Routes>
            <Route path="/" element={<SignInPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
