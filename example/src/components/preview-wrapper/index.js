import React from "react";

import Accordion from "../accordion";

export default function PreviewWrapper({ ...props }) {
  const { title, description, propDocs, exampleCode } = props;

  return (
    <>
      <div className="container  mla  mra  pv3  mb4  bb  bc-black">
        <div className="mb3">
          <h1 className="t-primary  f3  mb2">{title}</h1>
          {description && <p className="t-secondary  f5  mb2">{description}</p>}
        </div>
        {propDocs && <Accordion title="View props" content={propDocs} />}
        {exampleCode && (
          <div className="bg-almost-white  black  f6  t-primary">
            {exampleCode()}
          </div>
        )}
      </div>
    </>
  );
}
