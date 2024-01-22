import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Series from './components/Series/Series';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
