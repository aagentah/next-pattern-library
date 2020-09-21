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
              src={
                'https://cdn.sanity.io/images/q8z2vf2k/production/980450d8b1a8327131886c26362bd69f7559c94d-1024x683.jpg?rect=0,110,1024,462&w=3100&h=1400&auto=format'
              }
              placeholder={
                'https://cdn.sanity.io/images/q8z2vf2k/production/980450d8b1a8327131886c26362bd69f7559c94d-1024x683.jpg?rect=0,110,1024,462&w=155&h=70&auto=format'
              }
              alt={'This is the alt text.'}
              figcaption={'This is a figcaption.'}
              height={700}
              onClick={null}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
