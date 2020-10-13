import React, { useState } from 'react';
import { Button, Icon, Checkbox } from 'next-pattern-library';

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs';

export default function ButtonPreview({ ...props }) {
  const [skeleton, setSkeleton] = useState(null);

  const exampleCode = () => {
    return (
      <pre>
        {`
  import { Button } from "next-pattern-library";

  <Button
    /* Options */
    type={"primary"}
    size={"medium"}
    text={"Primary"}
    color={"black"}
    fluid={false}
    icon={null}
    iconFloat={null}
    inverted={false}
    loading={false}
    disabled={false}
    skeleton={false}
    onClick={null}
    /* Children */
    withLinkProps={null}
  />
          `}
      </pre>
    );
  };

  const buttonIcon = <Icon icon={['fas', 'arrow-right']} />;

  return (
    <React.Fragment>
      <PreviewWrapper
        title="Button"
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

        <div className="flex  flex-wrap  justify-center">
          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="medium"
              text="Primary"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="medium"
              text="Inverted"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="medium"
              text="Loading"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              loading
              disabled={false}
              inverted={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="medium"
              text="Disabled"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted
              loading={false}
              disabled
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
        </div>

        <div className="flex  flex-wrap  justify-center">
          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="small"
              text="Primary Small"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="medium"
              text="Primary Medium"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="large"
              text="Primary Large"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="primary"
              size="x-large"
              text="Primary X-Large"
              color="black"
              fluid={false}
              icon={null}
              iconFloat={null}
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
        </div>

        <div className="flex  flex-wrap  justify-between">
          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
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
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="medium"
              text="Inverted"
              color="black"
              fluid={false}
              icon={buttonIcon}
              iconFloat={null}
              inverted
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="medium"
              text="Loading"
              color="black"
              fluid={false}
              icon={buttonIcon}
              iconFloat={null}
              inverted={false}
              loading
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="medium"
              text="Disabled"
              color="black"
              fluid={false}
              icon={buttonIcon}
              iconFloat={null}
              inverted
              loading={false}
              disabled
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
        </div>

        <div className="flex  flex-wrap  justify-between">
          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="small"
              text="Secondary Small"
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
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="medium"
              text="Secondary Medium"
              color="black"
              fluid={false}
              iconFloat="left"
              icon={buttonIcon}
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="large"
              text="Secondary Large"
              color="black"
              fluid={false}
              icon={buttonIcon}
              iconFloat="right"
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>

          <div className="col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4">
            <Button
              /* Options */
              type="secondary"
              size="x-large"
              text="Secondary X-Large"
              color="black"
              fluid={false}
              icon={buttonIcon}
              iconFloat="left"
              inverted={false}
              loading={false}
              disabled={false}
              skeleton={skeleton}
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
