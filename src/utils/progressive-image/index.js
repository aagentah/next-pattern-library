import React, { useState } from 'react';

/**
 * ProgressiveImage.
 */

export default function ProgressiveImage(props) {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const { placeholder, dimensions, alt, src } = props;
  const handleImageLoaded = () => setHighResImageLoaded(true);

  return (
    <React.Fragment>
      <img
        className={`image__loading ${highResImageLoaded && 'is-loaded'}`}
        alt="loading..."
        src={placeholder}
        style={{
          ...dimensions,
          opacity: highResImageLoaded ? '0' : '1'
        }}
      />

      <img
        className="w-100  image"
        style={dimensions}
        alt={alt}
        src={src}
        onLoad={handleImageLoaded}
      />
    </React.Fragment>
  );
}
