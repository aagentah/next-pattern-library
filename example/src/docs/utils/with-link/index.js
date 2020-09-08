import React from 'react';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function WithLinkPreview({ ...props }) {
  const exampleCode = () => {
    return (
      <pre>
        {`
  const withLinkProps = {
    type: 'external',
    href: '/yo',
    target: '_blank',
    routerLink: Link
  };
          `}
      </pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="WithLink"
        description="Governs the routing props for individual Modules and Components"
        propDocs={propDocs}
        exampleCode={exampleCode}
      />
    </React.Fragment>
  );
}
