import React from "react";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function WithLinkPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={"WithLink"}
        description={
          "Governs the routing props for individual Modules and Components"
        }
        propDocs={propDocs}
      />
    </React.Fragment>
  );
}
