import Image from 'next/image';
import styled from 'styled-components';

export const PosterContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:before {
    z-index: 10;
    content: '';
    display: block;
    position: absolute;
    height: 0%;
    width: 100%;
    bottom: 0;
    transition: height 350ms ease-out;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  &:hover:before {
    height: 100%;
  }
`;

export const PosterImage = styled(Image)``;
