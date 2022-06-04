import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './MainContent';

function App() {

  return (
    <div className="main-content">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
