import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const { withLinkProps, children, ...newProps } = props;
  const newProps = cloneDeep(props);

  if (!withLinkProps) {
    return <div {...newProps}>{children}</div>;
  }

  const { type, href, target, routerLink, routerLinkProps } = withLinkProps;
  const RouterLink = routerLink;

  switch (type) {
    case 'next':
      return (
        <React.Fragment>
          <RouterLink href={href} {...routerLinkProps}>
            <a {...newProps}>{children}</a>
          </RouterLink>
        </React.Fragment>
      );
    case 'external':
      return (
        <a
          className="link"
          target={target || '_self'}
          href={href}
          {...newProps}
        >
          {children}
        </a>
      );
    case 'form':
      return (
        <button type="submit" {...newProps}>
          {children}
        </button>
      );
    case 'none':
      return <div {...newProps}>{children}</div>;
    default:
      return <div {...newProps}>{children}</div>;
  }
}
