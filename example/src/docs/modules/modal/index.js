import React, { useState } from "react";
import { Modal, Heading, Copy, Button } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function ModalPreview({ ...props }) {
  const [modalActive, setModalActive] = useState(false);

  const heroHeading = (
    <Heading
      /* Options */
      htmlEntity="h1"
      text="Lorem ipsum dolor sit amet."
      color="black"
      size="large"
      truncate={1}
      reveal={null}
      /* Children */
      withLinkProps={null}
    />
  );

  const heroCopy = (
    <Copy
      /* Options */
      text="Lorem ipsum dolor sit amet."
      color="black"
      size="medium"
      truncate={1}
    />
  );

  const heroButton = (
    <Button
      /* Options */
      type="primary"
      size="medium"
      text="Close Modal"
      color="black"
      fluid={false}
      icon={null}
      iconFloat={null}
      inverted={false}
      loading={false}
      disabled={false}
      onClick={() => {
        setModalActive(!modalActive);
      }}
      /* Children */
      withLinkProps={null}
    />
  );

  return (
    <React.Fragment>
      <PreviewWrapper title="Modal" description="" propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className="flex  flex-wrap  mb4">
          <Modal
            /* Options */
            size="small"
            active={modalActive}
          >
            <div className="pb2">{heroHeading}</div>
            <div className="pb3">{heroCopy}</div>
            <div className="pb2">{heroButton}</div>
          </Modal>

          <Button
            /* Options */
            type="primary"
            size="medium"
            text="Toggle Modal"
            color="black"
            fluid={false}
            icon={null}
            iconFloat={null}
            inverted={false}
            loading={false}
            disabled={false}
            onClick={() => {
              setModalActive(!modalActive);
            }}
            /* Children */
            withLinkProps={null}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
