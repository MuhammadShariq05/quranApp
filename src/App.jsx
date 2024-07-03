import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurahList from './components/SurahList';
import SurahDetail from './components/SurahDetails';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<SurahList />} />
          <Route path="/surah/:number" element={<SurahDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
