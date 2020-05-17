import React from "react";
import TruncateMarkup from "react-truncate-markup";

/**
 * A Copy.
 */

export default function Copy(props) {
  const {
    /* Options */
    text,
    color,
    onClick,
    size,
    iconFloat,
    truncate
  } = props;

  const hasTruncate = truncate ? true : false;
  const ElementType = hasTruncate ? TruncateMarkup : React.Fragment;
  const hasOnClick = onClick ? { onClick } : "";

  let lineHeight;
  switch (size) {
    case "small":
      lineHeight = 18;
      break;
    case "medium":
      lineHeight = 22;
      break;
    case "large":
      lineHeight = 24;
      break;
    case "x-large":
      lineHeight = 26;
      break;
    default:
      lineHeight = 24;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : "auto"
  };

  return (
    <p {...hasOnClick} className={`copy ${size} ${color}`} style={styles}>
      <ElementType lines={truncate}>
        <span>{text}</span>
      </ElementType>
    </p>
  );
}
