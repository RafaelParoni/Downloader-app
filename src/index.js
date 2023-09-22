import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage/homePage';
import YoutubeMp3 from './pages/youtubeMp3/youtubeMp3';
import Spotify from './pages/spotify/spotify';
import Tiktok from './pages/tiktok/tiktok';
import ComeBackBtn from './Components/ComeBack'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage /> } />
    <Route path='/youtube-Downloader' element={<YoutubeMp3 /> } />
    <Route path='/spotify-Downloader' element={<Spotify /> } />
    <Route path='/tiktok-Downloader' element={<Tiktok /> } />
  </Routes>
  </BrowserRouter>
);


