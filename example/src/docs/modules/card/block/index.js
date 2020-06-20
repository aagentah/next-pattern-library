import React from "react";
import {
  Card,
  Image,
  Label,
  Heading,
  Copy,
  Button,
  Icon
} from "next-pattern-library";

import PreviewWrapper from "../../../../components/preview-wrapper";
import propDocs from "../propDocs";

export default function CardBlockPreview({ ...props }) {
  const buttonIcon = <Icon faClass="fa fa-arrow-right" />;

  const cardImage = (
    <Image
      /* Options */
      src={"https://via.placeholder.com/1000x1000"}
      placeholder={"https://via.placeholder.com/500x500"}
      alt={"This is the alt text."}
      figcaption={null}
      height={250}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const cardLabel = (
    <Label
      /* Options */
      type={""}
      text={"label"}
      color={"black"}
      backgroundColor={"white"}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const cardHeading = (
    <Heading
      /* Options */
      htmlEntity={"h2"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet"
      }
      color={"black"}
      size={"small"}
      truncate={2}
      reveal={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const cardCopy = (
    <Copy
      /* Options */
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio."
      }
      color={"black"}
      size={"medium"}
      truncate={2}
    />
  );

  const cardButton = (
    <Button
      /* Options */
      type={"secondary"}
      size={"medium"}
      text={"Secondary"}
      color={"black"}
      fluid={false}
      icon={buttonIcon}
      iconFloat={null}
      inverted={false}
      loading={false}
      disabled={false}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper title={"Card"} description={""} propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
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
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-start  align-start  pa3"
            }
          >
            <Card
              /* Options */
              type={"block"}
              onClick={null}
              /* Children */
              image={cardImage}
              labelBlock={[cardLabel, cardLabel]}
              title={cardHeading}
              description={cardCopy}
              button={cardButton}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
