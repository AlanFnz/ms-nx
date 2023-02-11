import React, { useState } from 'react';
import { PosterContainer, PosterImage } from './styledComponents';

const Poster = ({ alt, src }) => {
  const [paddingTop, setPaddingTop] = useState('0');
  return (
    <PosterContainer style={{ paddingTop }}>
      <PosterImage
        alt={alt}
        src={src}
        fill
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement;
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
        }}
      />
    </PosterContainer>
  );
};

export default Poster;
