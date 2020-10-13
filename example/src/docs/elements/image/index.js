import React, { useState } from 'react';
import { Image, Checkbox } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function ImagePreview(props) {
  const [skeleton, setSkeleton] = useState(false);

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
    skeleton={false}
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
          <div className="col-24  col-8-md  pa3">
            <Image
              /* Options */
              src={
                'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg'
              }
              placeholder={null}
              alt={'This is the alt text.'}
              figcaption={'This is a figcaption.'}
              height={300}
              skeleton={skeleton}
              onClick={null}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
