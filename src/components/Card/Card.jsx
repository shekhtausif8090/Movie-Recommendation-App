import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Card({ result }) {
  console.log(result);

  return (
    <Wrapper>
      {result.map((res) => (
        <Item key={res.id}>
          <ImageLink>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${res.backdrop_path}`}
              alt=""
            />
          </ImageLink>
          <h4>{res.original_title}</h4>
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --min-column-width: min(300px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 64px 16px;
  padding: 16px;
  margin-top: 62px;
`;
const Item = styled.div`
  h4 {
    padding: 6px;
  }
`;
const ImageLink = styled(Link)`
  img {
    border-radius: 10px;
  }
`;
export default Card;
