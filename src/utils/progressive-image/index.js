import React, { useEffect, useState, useRef } from 'react';

/**
 * ProgressiveImage.
 */

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => setLoaded(true);

  useEffect(() => {
    if (ref.current && ref.current.complete) onLoad();
  });

  return [ref, loaded, onLoad];
};

const ProgressiveImage = props => {
  const { placeholder, dimensions, alt, src } = props;
  const [highResRef, highResLoaded, highResOnLoad] = useImageLoaded();
  const [lowResRef, lowResLoaded, lowResOnLoad] = useImageLoaded();

  return (
    <React.Fragment>
      <img
        ref={lowResRef}
        alt="loading..."
        src={placeholder}
        onLoad={lowResOnLoad}
        style={{
          ...dimensions,
          opacity: !lowResLoaded && !highResLoaded ? '1' : '0'
        }}
        className="image__loading"
      />

      <img
        ref={highResRef}
        alt={alt}
        src={src}
        onLoad={highResOnLoad}
        style={dimensions}
        className="image  w-100"
      />
    </React.Fragment>
  );
};

export default ProgressiveImage;
