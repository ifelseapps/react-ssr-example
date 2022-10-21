import React, { FC } from 'react';
import { Hello } from './components/Hello';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { AboutPage } from './pages/About';

export const App: FC = () => (
  <>
    <Hello/>
    <hr/>
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/about">О программе</Link>
      </li>
    </ul>
    <hr/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  </>
);
