import React from "react";
import { Input } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function InputPreview({ ...props }) {
  const exampleCode = () => {
    return (
      <pre>{`
  import { Input } from "next-pattern-library";

  <Input type="text" label="Name" />
          `}</pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Icon"}
        description={""}
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-8-md  flex  justify-center  justify-start-md  align-end  mb4"
            }
          >
            <Input type="text" label="Name" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
