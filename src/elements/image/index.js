import React from "react";
import ProgressiveImage from "../../utils/progressive-image";
import WithLink from "../../utils/with-link";

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
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const ElementType = placeholder ? ProgressiveImage : "img";
  const hasHeight = height ? `${height}px` : "auto";

  const styles = {
    height: hasHeight
  };

  return (
    <figure>
      <WithLink
        className="image__wrapper"
        style={styles}
        withLinkProps={withLinkProps}
      >
        <ElementType
          src={src}
          placeholder={placeholder}
          height={height}
          alt={alt}
        ></ElementType>
      </WithLink>

      {figcaption && (
        <figcaption className="black  f6  t-secondary  tac  mla  mra  pt2">
          {figcaption}
        </figcaption>
      )}
    </figure>
  );
}
