import React from 'react';
import { Image } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function ImagePreview(props) {
  const exampleCode = () => {
    return (
      <pre>
        {`
  import { Image } from "next-pattern-library";

  <Image
    /* Options */
    src={"https://via.placeholder.com/1000x1000"}
    placeholder={"https://via.placeholder.com/100x100"}
    alt={"This is the alt text."}
    figcaption={"This is a figcaption."}
    height={400}
    width={200}
    customClass={null}
    onClick={null}
  />
          `}
      </pre>
    );
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Image"
        description=""
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap  mb4">
          <div className="col-24  col-8-md  pa3">
            <Image
              /* Options */
              src="https://via.placeholder.com/1000x1000"
              placeholder="https://via.placeholder.com/1000x1000"
              alt="This is the alt text."
              figcaption="This is a figcaption."
              height={200}
              width={200}
              customClass="br4  shadow2"
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
