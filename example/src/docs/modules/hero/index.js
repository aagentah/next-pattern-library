import React from "react";
import { Hero, Image, Heading, Copy, Button } from "next-pattern-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function HeroPreview({ ...props }) {
  const buttonIcon = <FontAwesomeIcon icon={faArrowRight} />;

  const heroImage = (
    <Image
      /* Options */
      src={"https://via.placeholder.com/1000x3000"}
      placeholder={"https://via.placeholder.com/500x500"}
      alt={"This is the alt text."}
      figcaption={null}
      height={250}
      onClick={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroHeading = (
    <Heading
      /* Options */
      htmlEntity={"h1"}
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      color={"black"}
      size={"large"}
      truncate={1}
      reveal={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroCopy = (
    <Copy
      /* Options */
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta."
      }
      color={"black"}
      size={"medium"}
      truncate={1}
    />
  );

  const heroButton = (
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
      <PreviewWrapper title={"Hero"} description={""} propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  mb4"}>
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

        <div className={"flex  flex-wrap  mb4"}>
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

        <div className={"flex  flex-wrap  mb4"}>
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
