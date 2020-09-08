import React, { useState } from 'react';

/**
 * ProgressiveImage.
 */

export default function ProgressiveImage(props) {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const { placeholder, dimensions, alt, src } = props;

  return (
    <React.Fragment>
      <img
        className="w-100  image"
        style={dimensions}
        alt={alt}
        src={src}
        ref={img => {
          // onLoad replacement for SSR
          if (!img) return;
          img.onload = setHighResImageLoaded(true);
          if (img.complete) setHighResImageLoaded(true);
        }}
      />

      <img
        className="image__loading"
        alt="loading..."
        src={placeholder}
        style={{
          ...dimensions,
          opacity: highResImageLoaded ? '0' : '1'
        }}
      />
    </React.Fragment>
  );
}
