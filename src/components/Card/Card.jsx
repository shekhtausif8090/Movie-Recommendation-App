import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Star } from 'lucide-react';
import notFound from '../../assets/not-found.jpg';

function Card({ result, series }) {
  console.log(result);

  return (
    <Wrapper>
      {result.map((res) => (
        <Item key={res.id}>
          <ImageLink>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${res.poster_path}`}
              alt={series ? res.original_name : res.original_title}
              onError={(e) => {
                e.target.src = notFound; // Replace with your fallback image URL
                e.target.alt = 'Image Not Found';
              }}
              loading="lazy"
            />
          </ImageLink>
          <h4>{series ? res.original_name : res.original_title}</h4>
          <div style={{ position: 'absolute' }}>
            <Span>{res.vote_average}</Span>
            <Star size={18} fill="#facc15" color="#facc15" />
          </div>
        </Item>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --min-column-width: min(200px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 16px 32px;
  padding: 32px;
  margin-top: 62px;
  grid-auto-rows: minmax(250px, 100%);
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    padding: 6px;
  }
`;
const ImageLink = styled(Link)`
  img {
    border-radius: 6px;
  }
`;

const Span = styled.span``;
export default Card;
