import React from 'react';
import TruncateMarkup from 'react-truncate-markup';
import WithLink from '../../utils/with-link';

/**
 * A Heading.
 */

export default function Heading(props) {
  const {
    /* Options */
    htmlEntity,
    text,
    color,
    size,
    truncate,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : '';
  const ElementType = htmlEntity || 'h1';
  const hasTruncate = !!truncate;
  const ElementTypeInner = hasTruncate ? TruncateMarkup : React.Fragment;

  const heightSmall = 22;
  const heightMedium = 24;
  const heightLarge = 26;
  const heightXLarge = 38;

  let lineHeight;

  switch (size) {
    case 'small':
      lineHeight = heightSmall;
      break;
    case 'medium':
      lineHeight = heightMedium;
      break;
    case 'large':
      lineHeight = heightLarge;
      break;
    case 'x-large':
      lineHeight = heightXLarge;
      break;
    default:
      lineHeight = heightSmall;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : 'auto'
  };

  return (
    <WithLink {...(withLinkProps && { withLinkProps })}>
      <ElementType
        {...hasOnClick}
        className={`heading ${size} ${color}`}
        style={styles}
      >
        <ElementTypeInner {...(truncate && { lines: truncate })}>
          <span>{text}</span>
        </ElementTypeInner>
      </ElementType>
    </WithLink>
  );
}
