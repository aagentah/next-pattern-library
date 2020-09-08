import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

/**
 * Determines what link type children should be wrapped in.
 */

export default function WithLink(props) {
  const { withLinkProps } = props;

  // Clone props and delete withLink object
  const cloneProps = cloneDeep(props);
  delete cloneProps.withLinkProps;

  if (!withLinkProps) return <div {...cloneProps}>{props.children}</div>;

  const { type, url, target, routerLink, routerLinkProps } = withLinkProps;

  const RouterLink = routerLink;

  switch (type) {
    case 'next':
      return (
        <React.Fragments>
          <RouterLink href={url} {...routerLinkProps}>
            <a {...cloneProps}>{props.children}</a>
          </RouterLink>
        </React.Fragments>
      );
    case 'external':
      return (
        <a
          className="link"
          target={target || '_self'}
          href={url}
          {...cloneProps}
        >
          {props.children}
        </a>
      );
    case 'form':
      return (
        <button type="submit" {...cloneProps}>
          {props.children}
        </button>
      );
    case 'none':
      return <div {...cloneProps}>{props.children}</div>;
    default:
      return <div {...cloneProps}>{props.children}</div>;
  }
}
