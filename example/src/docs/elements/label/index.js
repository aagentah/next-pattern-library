import React from "react";
import { Label } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function LabelPreview(props) {
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
        <div className="flex  flex-wrap  mb4">
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              customClass={null}
              text="17/08/1996"
              color="black"
              backgroundColor="white"
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
