import React from 'react';
import { Heading } from 'next-pattern-library';
import { Link } from 'react-router-dom';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function HeadingPreview(props) {
  const exampleCode = () => {
    return (
      <pre>
        {`
  import { Heading } from "next-pattern-library";

  <Heading
    /* Options */
    htmlEntity={"h1"}
    text={"X-Large Heading"}
    color={"black"}
    size={"x-large"}
    truncate={null}
    onClick={null}
    /* Children */
    withLinkProps={null}
  />
          `}
      </pre>
    );
  };

  const withLinkProps = {
    type: 'external',
    url: '/yo',
    target: '_blank',
    routerLink: Link
  };

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Heading"
        description=""
        propDocs={propDocs}
        exampleCode={exampleCode}
      />

      <div className="container  mla  mra  relative">
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h1"
            text="X-Large Heading"
            color="black"
            size="x-large"
            truncate={null}
            onClick={null}
            /* Children */
            withLinkProps={withLinkProps}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h2"
            text="Large Heading"
            color="black"
            size="large"
            truncate={null}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h3"
            text="Medium Heading"
            color="black"
            size="medium"
            truncate={null}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h4"
            text="Small Heading"
            color="black"
            size="small"
            truncate={null}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            color="black"
            size="x-large"
            truncate={2}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            color="black"
            size="large"
            truncate={2}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            color="black"
            size="medium"
            truncate={2}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
        <div className="flex  flex-wrap  mb4">
          <Heading
            /* Options */
            htmlEntity="h4"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            color="black"
            size="small"
            truncate={2}
            onClick={null}
            /* Children */
            withLinkProps={null}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
