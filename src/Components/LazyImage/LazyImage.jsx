import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px 100px 0px',
  });

  return (
    <img
      ref={ref}
      src={inView ? src : ''}
      alt={alt}
    />
  );
};

export default LazyImage;