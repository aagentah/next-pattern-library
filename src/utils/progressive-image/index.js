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
        ref={input => {
          // onLoad replacement for SSR
          if (!input) return;
          const img = input;
          const action = () => setHighResImageLoaded(true);

          img.onload = action;
          if (img.complete) action();
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
