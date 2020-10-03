import React, { useEffect, useState, useRef } from 'react';

/**
 * ProgressiveImage.
 */

<<<<<<< HEAD
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
=======
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
>>>>>>> 2af64d8d4deadc43d6983dff0845bda5aae71b23

  return (
    <React.Fragment>
      <img
<<<<<<< HEAD
=======
        ref={ref}
>>>>>>> 2af64d8d4deadc43d6983dff0845bda5aae71b23
        className="image__loading"
        alt="loading..."
        src={placeholder}
        style={{
          ...dimensions,
<<<<<<< HEAD
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
=======
          opacity: !loaded ? '1' : '0'
        }}
        onLoad={onLoad}
      />

      <img className="w-100  image" style={dimensions} alt={alt} src={src} />
    </React.Fragment>
  );
};
>>>>>>> 2af64d8d4deadc43d6983dff0845bda5aae71b23

export default ProgressiveImage;
