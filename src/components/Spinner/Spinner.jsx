import React from 'react';
import { Loader } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
const Spinner = ({ size }) => {
  return (
    <Wrapper>
      <Loader color="#374151" size={size} />
    </Wrapper>
  );
};

export default Spinner;

export const spin = keyframes`
 from {
    transform: rotate(-360deg);
  }
 `;

export const Wrapper = styled.div`
  display: block;
  width: min-content;
  height: min-content;
  animation: ${spin} 1000ms linear infinite;
  opacity: 0.6;
  margin: 20px auto;

  svg {
    display: block;
    max-width: revert;
  }
`;
