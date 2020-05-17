import React from "react";
import { Label } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function LabelPreview(props) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={"Label"}
        description={
          "Labels can be used on their own, or sometimes within a labelBlock"
        }
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  mb4"}>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              type={"date"}
              text={"17/08/1996"}
              color={"black"}
              backgroundColor={"white"}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              type={"author"}
              text={"Dan Jones"}
              color={"black"}
              backgroundColor={"white"}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              type={"price"}
              text={"£9.99"}
              color={"black"}
              backgroundColor={"white"}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              type={"sale-price"}
              text={"£4.99"}
              color={"secondary-color"}
              backgroundColor={"white"}
              onClick={null}
              /* Children */
              withLinkProps={null}
            />
          </div>
          <div className="col-12  col-4-md">
            <Label
              /* Options */
              type={"category"}
              text={"Interview"}
              color={"white"}
              backgroundColor={"secondary-color"}
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
