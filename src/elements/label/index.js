import React from "react";
import TruncateMarkup from "react-truncate-markup";
import WithLink from "../../utils/with-link";

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
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const link = withLinkProps ? { withLinkProps } : null;

  return (
    <span className="label__wrapper">
      <WithLink {...link}>
        <span
          {...hasOnClick}
          className={`label ${customClass} ${color} bg-${backgroundColor}`}
        >
          {text}
        </span>
      </WithLink>
    </span>
  );
}
