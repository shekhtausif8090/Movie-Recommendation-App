import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from '@tanstack/react-query';
import FetchGaners from '../Fetch-data/FetchGaners';
import Spinner from '../Spinner/Spinner';
import { FetchComingMovies } from '../Fetch-data/FetchMoviesByTime';
function Home() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['ganers'],
    queryFn: FetchGaners,
  });
  const { isLoading: loadingComingMovies, data: comingMovies } =
    useQuery({
      queryKey: ['comingMovies'],
      queryFn: FetchComingMovies,
    });

  console.log(comingMovies);

  if (isLoading || loadingComingMovies) {
    return <Spinner size={30} />;
  }

  return (
    <Wrapper>
      <Sidebar>
        <Aside>
          Ganere
          <ListWrapper>
            {data.genres.map(({ id, name }) => (
              <ul key={id}>
                <li>
                  <Link>{name}</Link>
                </li>
              </ul>
            ))}
          </ListWrapper>
        </Aside>
      </Sidebar>

      <Main>
        Main
        <div>
          <h1>Upcoming Movies</h1>
          <Card>
            {comingMovies.results.map((res) => (
              <ImageLink key={res.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${res.poster_path}`}
                  alt=""
                />
                <H4>{res.original_title}</H4>
              </ImageLink>
            ))}
          </Card>
          <Card>
            {comingMovies.results.map((res) => (
              <ImageLink key={res.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w780/${res.poster_path}`}
                  alt=""
                />
                <H4>{res.original_title}</H4>
              </ImageLink>
            ))}
          </Card>
        </div>
      </Main>
    </Wrapper>
  );
}

export default Home;

const Sidebar = styled.div`
  height: calc(100vh - 120px);

  overflow: auto;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
`;

const Aside = styled.aside`
  margin-left: 20px;
`;

const Main = styled.div`
  overflow: hidden;
`;

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  overflow-x: auto;
`;

const ImageLink = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  img {
    height: 100%;
  }
`;
const H4 = styled.h4`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px;
`;
const ListWrapper = styled.div`
  ul {
    padding-top: 10px;
    flex: 1;
  }

  li {
  }
`;
