import React, { useState } from "react";

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const [canRedirect, setCanRedirect] = useState(false);
  const { withLinkProps } = props;
  if (!withLinkProps) return <div {...props}>{props.children}</div>;
  const RouterRedirect = withLinkProps.routerLink;

  const handleClick = e => {
    e.preventDefault();
    setCanRedirect(true);
  };

  switch (withLinkProps.type) {
    case "next":
      if (RouterRedirect) {
        return (
          <React.Fragment>
            <RouterRedirect
              className="link"
              href={withLinkProps.href}
              onClick={handleClick}
              {...withLinkProps.routerLinkProps}
              {...props}
            >
              {props.children}
            </RouterRedirect>
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
