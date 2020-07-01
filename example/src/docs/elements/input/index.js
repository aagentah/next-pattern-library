import React, { useRef, useEffect } from "react";
import { Input, Icon } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function InputPreview({ ...props }) {
  const exampleCode = () => {
    return (
      <pre>{`
  import { Input } from "next-pattern-library";

  <Input
    /* Options */
    type="text"
    label="Username"
    name="username"
    value=""
    icon={null}
    required={true}
    disabled={false}
    readOnly={false}
  />
          `}</pre>
    );
  };

  const inputIcon = <Icon icon={["fas", "arrow-right"]} />;

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
              "col-24  col-8-md  flex  justify-center  justify-start-md  align-end  mb4  ph3"
            }
          >
            <Input
              /* Options */
              type="text"
              label="Username"
              name="username"
              value=""
              icon={inputIcon}
              required={true}
              disabled={false}
              readOnly={false}
            />
          </div>
          <div
            className={
              "col-24  col-8-md  flex  justify-center  justify-start-md  align-end  mb4  ph3"
            }
          >
            <Input
              /* Options */
              type="text"
              label="Username"
              name="username"
              value=""
              icon={null}
              required={true}
              disabled={false}
              readOnly={false}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
