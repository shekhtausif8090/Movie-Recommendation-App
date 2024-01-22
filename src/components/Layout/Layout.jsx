import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
