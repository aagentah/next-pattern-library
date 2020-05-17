import React from "react";
import TruncateMarkup from "react-truncate-markup";
import WithLink from "../../utils/with-link";

/**
 * A Label.
 */

export default function Label(props) {
  const {
    /* Options */
    type,
    text,
    color,
    backgroundColor,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";

  return (
    <span className="label__wrapper">
      <WithLink withLinkProps={withLinkProps}>
        <span
          {...hasOnClick}
          className={`label ${type} ${color} bg-${backgroundColor}`}
        >
          {text}
        </span>
      </WithLink>
    </span>
  );
}
