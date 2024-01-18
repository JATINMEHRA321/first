import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component2 } from './components/component-2/component-2.js';
import { Component3 } from './components/component-3/component-3.js';
import { Inputcom } from './components/inputcom/inputcom.js';
import { Component4 } from './components/component-4/component-4.js';
import { Component5 } from './components/component-5/component-5.js';
import Loader1 from './components/mainloader/loader1.jsx';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Component2 />} />
        <Route path="/home1" element={<Component3 />} />
        <Route path="/home2" element={<Inputcom />} />
        <Route path="/home3" element={<Component4 />} />
        <Route path="/home5" element={<Component5 />} />
        <Route path="/home6" element={<Loader1 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root
);
