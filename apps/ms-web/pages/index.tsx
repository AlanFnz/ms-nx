import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { State } from '../types/commonTypes';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Poster from '../components/Poster/Poster';

const MainContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding: 30px 5vw;
`;

export function Index() {
  const posters = useSelector((state: State) => state.posters);

  return (
    <MainContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={'6px'}>
          {posters.map((poster) => (
            <Poster key={poster.id} title={poster.title} src={poster.src} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </MainContainer>
  );
}

export default Index;
