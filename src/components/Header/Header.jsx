import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">MovieHub</Link>
      </Logo>
      <nav>
        <ul>
          {Links.map(({ label, path, id }) => (
            <li key={id}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 200px;
  background-color: #67e8f9;
  display: flex;
  padding-top: 48px;
  align-items: baseline;

  nav {
    margin-left: 58px;

    ul {
      display: flex;
      gap: 16px;
      padding: 12px;

      li {
        padding: 12px;
      }
    }
  }
`;
const Logo = styled.div`
  padding: 16px;
  margin-left: 32px;
`;

const Links = [
  {
    id: '01',
    label: 'Movies',
    path: '/m',
  },
  {
    id: '02',
    label: 'Tv Series',
    path: '/tv',
  },
  {
    id: '03',
    label: 'Genere',
    path: '/g',
  },
  {
    id: '04',
    label: 'By Year',
    path: '/y',
  },
];

export default Header;
