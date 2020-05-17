import React from "react";
import TruncateMarkup from "react-truncate-markup";
import WithLink from "../../utils/with-link";

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
    reveal,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const hasOnClick = onClick ? { onClick } : "";
  const ElementType = htmlEntity || "h1";
  const hasTruncate = truncate ? true : false;
  const hasReveal = reveal ? "heading--reveal" : "";
  const ElementTypeInner = hasTruncate ? TruncateMarkup : React.Fragment;

  const heightSmall = 22;
  const heightMedium = 24;
  const heightLarge = 26;
  const heightXLarge = 38;

  let lineHeight;
  switch (size) {
    case "small":
      lineHeight = hasReveal ? heightSmall + 4 : heightSmall;
      break;
    case "medium":
      lineHeight = hasReveal ? heightMedium + 4 : heightMedium;
      break;
    case "large":
      lineHeight = hasReveal ? heightLarge + 4 : heightLarge;
      break;
    case "x-large":
      lineHeight = hasReveal ? heightXLarge + 4 : heightXLarge;
      break;
    default:
      lineHeight = hasReveal ? heightSmall + 4 : heightSmall;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : "auto"
  };

  return (
    <WithLink withLinkProps={withLinkProps}>
      <ElementType
        {...hasOnClick}
        className={`heading ${size} ${color} ${hasReveal}`}
        style={styles}
      >
        <ElementTypeInner lines={truncate}>
          <span>{text}</span>
        </ElementTypeInner>
      </ElementType>
    </WithLink>
  );
}
