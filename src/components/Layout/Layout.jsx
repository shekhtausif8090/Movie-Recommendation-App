import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

function Layout() {
  return (
    <Wrapper>
      <Header />
      <main style={{ border: '1px solid black', flex: '1' }}>
        <Outlet />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Layout;
