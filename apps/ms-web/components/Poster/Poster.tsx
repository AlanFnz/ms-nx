import React from 'react';
import useMasonryImage from 'apps/ms-web/hooks/useImagePosition';
import { PosterContainer, PosterImage } from './styledComponents';

const Poster = ({ title, src }) => {
  const { getPaddingTop, paddingTop } = useMasonryImage();

  return (
    <PosterContainer style={{ paddingTop }} title={title}>
      <PosterImage alt={title} src={src} fill onLoad={getPaddingTop} />
    </PosterContainer>
  );
};

export default Poster;
