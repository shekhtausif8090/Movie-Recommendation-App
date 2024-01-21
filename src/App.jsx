import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
