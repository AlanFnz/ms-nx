import React from 'react';
import { PosterImage } from './styledComponents';

const Poster = ({ key, alt, src }) => (
  <PosterImage key={key} alt={alt} src={src} />
);

export default Poster;
