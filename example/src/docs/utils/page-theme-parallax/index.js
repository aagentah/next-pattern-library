import React from "react";
import {
  PageThemeParallax,
  Card,
  Image,
  Heading,
  Copy,
  Button
} from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function CardBlockPreview({ ...props }) {
  const cardblockImage = (
    <Image
      type={""}
      src={"https://via.placeholder.com/1000x1000"}
      placeholder={"https://via.placeholder.com/500x500"}
      alt={"This is the alt text."}
      figcaption={null}
      progressive={true}
      objectFit={"cover"}
      height={250}
      onClick={null}
    />
  );

  const cardBlockHeading = (
    <Heading
      htmlEntity={"h2"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet"
      }
      color={"black"}
      size={"small"}
      truncate={2}
    />
  );

  const cardBlockCopy = (
    <Copy
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
      }
      color={"black"}
      size={"medium"}
      truncate={2}
    />
  );

  const cardBlockButton = (
    <Button
      htmlEntity={"a"}
      text={"Click here"}
      icon={"arrow-right"}
      color={"black"}
      type={"primary"}
      fluid={false}
      onClick={null}
      size={"small"}
      inverted={false}
      loading={false}
      disabled={false}
      iconFloat={null}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper
        title={"PageThemeParallax"}
        description={
          "Applies the theme parallax icons relative to the parent element width"
        }
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <PageThemeParallax />

        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={null}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>
        </div>

        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"null"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={"£9.99"}
              price={null}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>
        </div>

        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"null"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={"£9.99"}
              price={null}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>
        </div>

        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"null"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={"£9.99"}
              price={null}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>
        </div>

        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"null"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={"£9.99"}
              price={null}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>
        </div>

        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"null"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={null}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={null}
              price={"£9.99"}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              image={cardblockImage}
              type={"block"}
              title={cardBlockHeading}
              description={cardBlockCopy}
              onClick={"£9.99"}
              price={null}
              discountPrice={"£4.99"}
              button={cardBlockButton}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
