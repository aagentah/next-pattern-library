import React from 'react';
import TruncateMarkup from 'react-truncate-markup';
import WithLink from '../../utils/with-link';

/**
 * A Label.
 */

export default function Label(props) {
  const {
    /* Options */
    customClass,
    text,
    color,
    backgroundColor,
    skeleton,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const skeletonClass = skeleton
    ? 'skeleton  skeleton-active'
    : 'skeleton  skeleton-disabled';

  return (
    <WithLink
      className={`label__wrapper  ${skeletonClass}`}
      {...(withLinkProps && { withLinkProps })}
    >
      <span
        {...(onClick && { onClick })}
        className={`label ${customClass} rpl-${color} rpl-bg-${backgroundColor}`}
      >
        {text}
      </span>
    </WithLink>
  );
}
