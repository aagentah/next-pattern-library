import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const { withLinkProps, children } = props;
  const cloneProps = cloneDeep(props);

  if (cloneProps.withLinkProps) delete cloneProps.withLinkProps;
  if (cloneProps.children) delete cloneProps.children;
  if (!withLinkProps) return <div {...cloneProps}>{children}</div>;

  const { type, href, target, routerLink, routerLinkProps } = withLinkProps;

  const RouterLink = routerLink;

  switch (type) {
    case 'next':
      return (
        <React.Fragment>
          <RouterLink href={href} {...routerLinkProps}>
            <a {...cloneProps}>{children}</a>
          </RouterLink>
        </React.Fragment>
      );
    case 'external':
      return (
        <a
          className="link"
          target={target || '_self'}
          href={href}
          {...cloneProps}
        >
          {children}
        </a>
      );
    case 'form':
      return (
        <button type="submit" {...cloneProps}>
          {children}
        </button>
      );
    case 'none':
      return <div {...cloneProps}>{children}</div>;
    default:
      return <div {...cloneProps}>{children}</div>;
  }
}
