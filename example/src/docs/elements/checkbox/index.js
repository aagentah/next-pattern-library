import React, { useRef, useEffect } from 'react';
import { Checkbox } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function InputPreview({ ...props }) {
  const exampleCode = () => {
    return (
      <pre>
        {`
  <Checkbox
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
        title="Checkbox"
        description=""
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap">
          <div className="col-24  col-8-md  flex  justify-center  justify-start-md  align-end  mb4  ph3">
            <Checkbox
              /* Options */
              label="Lorem ipseum dolor sit amet."
              name="1"
              checked
              required
              disabled={false}
              onClick={null}
            />
          </div>
          <div className="col-24  col-8-md  flex  justify-center  justify-start-md  align-end  mb4  ph3">
            <Checkbox
              /* Options */
              label="Lorem ipseum dolor sit amet."
              name="2"
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
