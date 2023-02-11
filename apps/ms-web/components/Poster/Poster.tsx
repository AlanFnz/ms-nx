import useMasonryImage from 'apps/ms-web/hooks/useImagePosition';
import React, { useState } from 'react';
import { PosterContainer, PosterImage } from './styledComponents';

const Poster = ({ alt, src }) => {
  const { getPaddingTop, paddingTop } = useMasonryImage();

  return (
    <PosterContainer style={{ paddingTop }}>
      <PosterImage
        alt={alt}
        src={src}
        fill
        onLoad={getPaddingTop}
      />
    </PosterContainer>
  );
};

export default Poster;
