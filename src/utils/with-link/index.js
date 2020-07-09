import React, { useState } from "react";

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const [canRedirect, setCanRedirect] = useState(false);
  const { withLinkProps } = props;
  if (!withLinkProps) return <div {...props}>{props.children}</div>;
  const RouterLink = withLinkProps.routerLink;

  switch (withLinkProps.type) {
    case "next":
      if (RouterLink) {
        return (
          <React.Fragment>
            <RouterLink
              href={withLinkProps.href}
              {...withLinkProps.routerLinkProps}
            >
              <a {...props}>{props.children}</a>
            </RouterLink>
          </React.Fragment>
        );
      }
      break;
    case "external":
      return (
        <a
          className="link"
          target={withLinkProps.target || "_self"}
          href={withLinkProps.href}
          {...props}
        >
          {props.children}
        </a>
      );
      break;
    case "form":
      return (
        <button type="submit" {...props}>
          {props.children}
        </button>
      );
      break;
    case "none":
      return <div {...props}>{props.children}</div>;
      break;
    default:
      return <div {...props}>{props.children}</div>;
  }
}
