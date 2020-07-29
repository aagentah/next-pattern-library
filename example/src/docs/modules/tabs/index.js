import React, { useState } from 'react';
import { Tabs } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function ModalPreview({ ...props }) {
  const [modalActive, setModalActive] = useState(false);

  const tabContent1 = <p>This is tab 1.</p>;
  const tabContent2 = <p>This is tab 2.</p>;
  const tabContent3 = <p>This is tab 3.</p>;

  return (
    <React.Fragment>
      <PreviewWrapper title="Modal" description="" propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap  mb4">
          <Tabs
            /* Options */
            content={[
              { id: '1', tabTitle: 'Tab 1', tabContent: tabContent1 },
              { id: '2', tabTitle: 'Tab 2', tabContent: tabContent2 },
              { id: '3', tabTitle: 'Tab 3', tabContent: tabContent3 }
            ]}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
