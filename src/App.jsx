import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Advertiser from './pages/Advertiser';
import Influencer from './pages/Influencer';
import InfluencerIntro from './pages/Introduce/InfluencerIntro';
import AdvertiserIntro from './pages/Introduce/AdvertiserIntro';
import InfluencerMypage from './pages/Mypage/InfluencerMypage';
import Report from './pages/Influencer/Report';
import AdvertiserMypage from './pages/Mypage/AdvertiserMypage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/advertiser" element={<Advertiser />} />
                <Route path="/influencer" element={<Influencer />} />
                <Route path="/influintro" element={<InfluencerIntro />} />
                <Route path="/adintro" element={<AdvertiserIntro />} />
                <Route path="/report" element={<Report />} />
                <Route path="/influmypage" element={<InfluencerMypage />} />
                <Route path="/admypage" element={<AdvertiserMypage />} />
            </Routes>
        </Router>
    );
}

export default App;
