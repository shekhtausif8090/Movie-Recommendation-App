import React from 'react';
import axios from 'axios';

async function FetchData() {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?language=en-US',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWY2NTIyOWNlOTJmZGViMWU0NmQyMzA0ZmIyNGI2YiIsInN1YiI6IjY1YWI5NGNiYmU2ZDg4MDBiZDkyN2NkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lhfgxNXNpsr1zDYla-qu9BS6I4FwFI_9bP8ZWOchbfs',
      },
    }
  );

  if (!res.ok) throw new Error(`Something went wrong`);

  return await res.json();
}

export default FetchData;
