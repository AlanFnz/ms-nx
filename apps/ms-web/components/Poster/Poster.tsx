import React, { useState } from 'react';
import { PosterImage } from './styledComponents';

const Poster = ({ key, alt, src }) => {
  const [paddingTop, setPaddingTop] = useState('0');
  return (
    <div style={{ position: 'relative', paddingTop }}>
      <PosterImage
        key={key}
        alt={alt}
        src={src}
        fill
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement;
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
        }}
      />
    </div>
  );
};

export default Poster;
