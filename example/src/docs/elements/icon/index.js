import React from "react";
import { Icon } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function IconPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper title={"Icon"} description={""} propDocs={propDocs} />

      <div className="container  mla  mra">
        <div className={"flex  flex-wrap  justify-center"}>
          <div
            className={
              "col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4"
            }
          >
            <Icon faClass="fa fa-spinner fa-spin" />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4"
            }
          >
            <Icon faClass="fa fa-spinner fa-spin" />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4"
            }
          >
            <Icon faClass="fa fa-spinner fa-spin" />
          </div>

          <div
            className={
              "col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4"
            }
          >
            <Icon faClass="fa fa-spinner fa-spin" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
