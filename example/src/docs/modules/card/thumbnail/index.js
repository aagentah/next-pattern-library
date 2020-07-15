import React from "react";
import { Card, Image, Label, Heading, Copy } from "next-pattern-library";

import PreviewWrapper from "../../../../components/preview-wrapper";
import propDocs from "../propDocs";

export default function CardThumbnailPreview({ ...props }) {
  const cardImage = (
    <Image
      /* Options */
      src="https://via.placeholder.com/1000x1000"
      placeholder="https://via.placeholder.com/500x500"
      alt="This is the alt text."
      figcaption={null}
      height={100}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const cardLabel = (
    <Label
      /* Options */
      type=""
      text="label"
      color="black"
      backgroundColor="white"
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const cardHeading = (
    <Heading
      /* Options */
      htmlEntity="h2"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet"
      color="black"
      size="small"
      truncate={1}
      reveal={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const cardCopy = (
    <Copy
      /* Options */
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
      color="black"
      size="medium"
      truncate={1}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper title="Card" description="" propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap">
          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              label={null}
              tag={null}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>
        </div>

        <div className="flex  flex-wrap">
          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>

          <div
            className="col-24  col-6-md  flex  justify-start  align-start  pa3"
          >
            <Card
              /* Options */
              type="thumbnail"
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={null}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
