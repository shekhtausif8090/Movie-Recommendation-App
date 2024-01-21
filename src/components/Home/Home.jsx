import React from 'react';
import { useQuery } from '@tanstack/react-query';
import FetchData from '../Fetch-data/FetchData';
import Card from '../Card/Card';
function Home() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['movies'],
    queryFn: FetchData,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }
  console.log(data);
  return (
    <div>
      <Card result={data.results}></Card>
    </div>
  );
}

export default Home;
