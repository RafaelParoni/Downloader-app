import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage/homePage';
import YoutubeMp3 from './pages/youtubeMp3/youtubeMp3';
import Spotify from './pages/spotify/spotify';
import Tiktok from './pages/tiktok/tiktok';
import Insta from './pages/instagram/instagram';
import ComeBackBtn from './Components/ComeBack'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage /> } />
    <Route path='/Dlyoutube' element={<YoutubeMp3 /> } />
    <Route path='/Dlspotify' element={<Spotify /> } />
    <Route path='/ltiktok' element={<Tiktok /> } />
    <Route path='/Dlinstagram' element={<Insta /> } />
  </Routes>
  </BrowserRouter>
);


