import React from "react";
import { Copy } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function CopyPreview(props) {
  const exampleCode = () => {
    return (
      <pre>{`
  import { Copy } from "next-pattern-library";

  <Copy
    /* Options */
    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    color={"black"}
    size={"x-large"}
    truncate={2}
  />
          `}</pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Copy"}
        description={""}
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  mb4"}>
          <Copy
            /* Options */
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            }
            color={"black"}
            size={"x-large"}
            truncate={2}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Copy
            /* Options */
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            }
            color={"black"}
            size={"large"}
            truncate={2}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Copy
            /* Options */
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            }
            color={"black"}
            size={"medium"}
            truncate={2}
          />
        </div>
        <div className={"flex  flex-wrap  mb4"}>
          <Copy
            /* Options */
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
            }
            color={"black"}
            size={"small"}
            truncate={2}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
