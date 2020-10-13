import React, { useState } from 'react';
import {
  Hero,
  Image,
  Heading,
  Copy,
  Button,
  Icon,
  Checkbox
} from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function HeroPreview({ ...props }) {
  const [skeleton, setSkeleton] = useState(null);

  const buttonIcon = <Icon icon={['fas', 'arrow-right']} />;

  const heroImage = (
    <Image
      /* Options */
      src="https://via.placeholder.com/1000x3000"
      placeholder="https://via.placeholder.com/500x500"
      alt="This is the alt text."
      figcaption={null}
      height={250}
      skeleton={skeleton}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroHeading = (
    <Heading
      /* Options */
      htmlEntity="h1"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      color="black"
      size="large"
      truncate={1}
      skeleton={skeleton}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroCopy = (
    <Copy
      /* Options */
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta."
      color="black"
      size="medium"
      truncate={1}
      skeleton={skeleton}
    />
  );

  const heroButton = (
    <Button
      /* Options */
      type="secondary"
      size="medium"
      text="Secondary"
      color="black"
      fluid={false}
      icon={buttonIcon}
      iconFloat={null}
      inverted={false}
      loading={false}
      disabled={false}
      skeleton={skeleton}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper title="Hero" description="" propDocs={propDocs} />

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
          <Hero
            /* Options */
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
            button={heroButton}
          />
        </div>

        <div className="flex  flex-wrap  mb4">
          <Hero
            /* Options */
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
            button={heroButton}
          />
        </div>

        <div className="flex  flex-wrap  mb4">
          <Hero
            /* Options */
            height={250}
            /* Children */
            image={heroImage}
            title={heroHeading}
            description={heroCopy}
            button={heroButton}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
