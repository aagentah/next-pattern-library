import React, { useState } from 'react';
import { Label, Checkbox } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function LabelPreview(props) {
  const [skeleton, setSkeleton] = useState(null);

  const exampleCode = () => {
    return (
      <pre>
        {`
  import { Label } from "next-pattern-library";

  <Label
    /* Options */
    customClass={null}
    text={"17/08/1996"}
    color={"black"}
    backgroundColor={"white"}
    skeleton={false}
    onClick={null}
    /* Children */
    withLinkProps={null}
  />
          `}
      </pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Label"
        description="Labels can be used on their own, or sometimes within a labelBlock"
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
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              customClass={null}
              text="17/08/1996"
              color="black"
              backgroundColor="white"
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              customClass={null}
              text="Dan Jones"
              color="black"
              backgroundColor="white"
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              customClass={null}
              text="£9.99"
              color="black"
              backgroundColor="white"
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              customClass={null}
              text="£4.99"
              color="secondary-color"
              backgroundColor="white"
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              customClass="ph2"
              text="Interview"
              color="white"
              backgroundColor="secondary-color"
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
