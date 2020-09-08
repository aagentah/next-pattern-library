import React from 'react';
import ProgressiveImage from '../../utils/progressive-image';
import WithLink from '../../utils/with-link';

/**
 * An Image.
 */

export default function Image(props) {
  const {
    /* Options */
    src,
    placeholder,
    alt,
    figcaption,
    height,
    width,
    customClass,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : '';
  const ElementType = placeholder ? ProgressiveImage : 'img';
  const hasHeight = height ? `${height}px` : 'auto';
  const hasWidth = width ? `${width}px` : '100%';

  const dimensions = {
    height: hasHeight,
    width: hasWidth,
    maxWidth: '100%'
  };

  return (
    <figure style={dimensions}>
      <WithLink
        style={dimensions}
        className={`image__wrapper  ${customClass}`}
        {...(withLinkProps && { withLinkProps })}
      >
        <ElementType
          style={dimensions}
          className="image"
          src={src}
          placeholder={placeholder}
          dimensions={dimensions}
          alt={alt}
        />
      </WithLink>

      {figcaption && (
        <figcaption className="image__figcaption">{figcaption}</figcaption>
      )}
    </figure>
  );
}
