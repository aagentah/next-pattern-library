import React, { useState } from 'react';

/**
 * ProgressiveImage.
 */

const ProgressiveImage = React.memo(props => {
  const { placeholder, dimensions, alt, src } = props;

  // Loaded states
  const [highResLoaded, setHighResLoaded] = useState(false);
  const [lowResLoaded, setLowResLoaded] = useState(false);

  // Set loaded states
  const handleHighResLoaded = () => {
    if (!highResLoaded) setHighResLoaded(true);
  };
  const handleLowResLoaded = () => {
    if (!lowResLoaded) setLowResLoaded(true);
  };

  return (
    <React.Fragment>
      <img
        className="image__loading"
        alt="loading..."
        src={placeholder}
        style={{
          ...dimensions,
          opacity: !highResLoaded && !lowResLoaded ? '1' : '0'
        }}
        onLoad={handleLowResLoaded}
      />

      <img
        className="w-100  image"
        style={dimensions}
        alt={alt}
        src={src}
        onLoad={handleHighResLoaded}
      />
    </React.Fragment>
  );
});

export default ProgressiveImage;
