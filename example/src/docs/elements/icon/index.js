import React from "react";
import { Icon } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function IconPreview({ ...props }) {
  const exampleCode = () => {
    return (
      <pre>
        {`
  import { Icon } from "next-pattern-library";

  <Icon icon={["fas", "sign-in-alt"]} size="3x" />
          `}
      </pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Icon"
        description=""
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap  justify-center">
          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "trash"]} />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "sign-in-alt"]} />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "plus"]} />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "arrow-right"]} />
          </div>
        </div>

        <div className="flex  flex-wrap  justify-center">
          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "trash"]} size="2x" />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "sign-in-alt"]} size="2x" />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "plus"]} size="2x" />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "arrow-right"]} size="2x" />
          </div>
        </div>

        <div className="flex  flex-wrap  justify-center">
          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "trash"]} size="3x" />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "sign-in-alt"]} size="3x" />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "plus"]} size="3x" />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-center  align-end  mb4"
          >
            <Icon icon={["fas", "arrow-right"]} size="3x" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
