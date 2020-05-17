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

  const handleRouterRedirect = () => {
    if (canRedirect) return <RouterRedirect push to={withLinkProps.url} />;
    return false;
  };

  switch (withLinkProps.type) {
    case "internal":
      if (RouterRedirect) {
        return (
          <React.Fragment>
            <a
              className="link"
              href={withLinkProps.url}
              onClick={handleClick}
              {...props}
            >
              {props.children}
            </a>
            {handleRouterRedirect()}
          </React.Fragment>
        );
      }
      break;
    case "external":
      return (
        <a
          className="link"
          target={withLinkProps.target || "_self"}
          href={withLinkProps.url}
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
