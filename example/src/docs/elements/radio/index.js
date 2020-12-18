import React, { useRef, useEffect } from 'react';
import { Radio } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function InputPreview({ ...props }) {
  const exampleCode = () => {
    return (
      <pre>
        {`
  <Radio
    /* Options */
    label="Lorem ipseum dolor sit amet."
    name="1"
    checked={true}
    required
    disabled={false}
    onClick={state => {
      //
    }}
  />
          `}
      </pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Radio"
        description=""
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap">
          <div className="col-24  flex  justify-center  justify-start-md  align-end  mb4  ph3">
            <Radio
              /* Options */
              label="Lorem ipseum dolor sit amet."
              name="lorem"
              checked
              required
              disabled={false}
              onClick={null}
            />
          </div>
          <div className="col-24  flex  justify-center  justify-start-md  align-end  mb4  ph3">
            <Radio
              /* Options */
              label="Lorem ipseum dolor sit amet."
              name="lorem"
              checked={false}
              required
              disabled={false}
              onClick={null}
            />
          </div>
          <div className="col-24  flex  justify-center  justify-start-md  align-end  mb4  ph3">
            <Radio
              /* Options */
              label="Lorem ipseum dolor sit amet."
              name="lorem"
              checked={false}
              required
              disabled
              onClick={null}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
