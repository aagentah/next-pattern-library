import React, { useEffect, useState, useRef } from 'react';

/**
 * ProgressiveImage.
 */

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => setLoaded(true);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};

const ProgressiveImage = props => {
  const { placeholder, dimensions, alt, src } = props;
  const [ref, loaded, onLoad] = useImageLoaded();

  return (
    <React.Fragment>
      <img
        ref={ref}
        className="image__loading"
        alt="loading..."
        src={placeholder}
        style={{
          ...dimensions,
          opacity: !loaded ? '1' : '0'
        }}
        onLoad={onLoad}
      />

      <img className="w-100  image" style={dimensions} alt={alt} src={src} />
    </React.Fragment>
  );
};

export default ProgressiveImage;
