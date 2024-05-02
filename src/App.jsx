import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Company from './pages/Company';
import Influencer from './pages/Influencer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/company" element={<Company />} />
                <Route path="/influencer" element={<Influencer />} />
            </Routes>
        </Router>
    );
}

export default App;
