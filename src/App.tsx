import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { AboutPage } from './pages/About';

import './global-styles.css';
import { Layout } from './components/Layout';

export const App: FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  </Layout>
);
