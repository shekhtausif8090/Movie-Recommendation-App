import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useQuery } from '@tanstack/react-query';
import FetchData from './components/Fetch-data/FetchData';
import styled from 'styled-components';
import Card from './components/Card/Card';

function App() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['movies'],
    queryFn: FetchData,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  console.log(data);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Card result={data.results} />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Main = styled.main`
  flex: 1;
  background-color: #74b174;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
