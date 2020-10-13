import React, { useState } from 'react';
import { Copy, Checkbox } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function CopyPreview(props) {
  const [skeleton, setSkeleton] = useState(false);

  const exampleCode = () => {
    return (
      <pre>
        {`
  import { Copy } from "next-pattern-library";

  <Copy
    /* Options */
    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    color={"black"}
    size={"x-large"}
    truncate={2}
    skeleton={false}
  />
          `}
      </pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Copy"
        description=""
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className="bg-almost-white  dib  pa3  mb4">
          <Checkbox
            /* Options */
            label="Toggle Skeleton"
            name="1"
            checked={false}
            required
            disabled={false}
            onClick={checked => setSkeleton(!checked)}
          />
        </div>

        <div className="flex  flex-wrap  mb4">
          <Copy
            /* Options */
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            color="black"
            size="x-large"
            truncate={4}
            skeleton={skeleton}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Copy
            /* Options */
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            color="black"
            size="large"
            truncate={2}
            skeleton={skeleton}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Copy
            /* Options */
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            color="black"
            size="medium"
            truncate={2}
            skeleton={skeleton}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Copy
            /* Options */
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            color="black"
            size="small"
            truncate={2}
            skeleton={skeleton}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
