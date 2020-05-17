import React, { useState } from "react";

/**
 * ProgressiveImage.
 */

export default function ProgressiveImage(props) {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const { placeholder, height, alt, src } = props;

  return (
    <span>
      <img
        className="w-100  image"
        style={{ height: `${height}px` }}
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
        alt={alt}
        src={placeholder}
        style={{
          height: `${height}px`,
          opacity: highResImageLoaded ? "0" : "1"
        }}
      />
    </span>
  );
}
