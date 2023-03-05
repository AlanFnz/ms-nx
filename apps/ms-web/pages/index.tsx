import React, { useEffect } from 'react';
import styled from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosters } from '../state/slices/shopify';
import { AppDispatch, RootState } from '../state/store';

import Poster from '../components/Poster/Poster';

const MainContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding: 30px 5vw;
`;

export function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const posters = useSelector((state: RootState) => state.shopify.posters);

  useEffect(() => {
    dispatch(fetchPosters());
  }, []);

  return (
    <MainContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={'6px'}>
          {posters.map((poster) => (
            <Poster key={poster.id} title={poster.title} src={poster.images[0].src} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </MainContainer>
  );
}

export default Index;
