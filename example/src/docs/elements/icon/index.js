import React from "react";
import { Icon, Heading } from "next-pattern-library";

import PreviewWrapper from "../../../components/preview-wrapper";
import propDocs from "./propDocs";

export default function IconPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper title={"Icon"} description={""} propDocs={propDocs} />

      <div className="container  mla  mra">
        <Heading
          /* Options */
          htmlEntity={"h2"}
          text={"Functional"}
          color={"black"}
          size={"medium"}
          truncate={null}
        />

        <div className={"flex  flex-wrap  pt4"}>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"arrow-right"} color={"black"} size={24} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"mail"} color={"black"} size={24} />
          </div>
        </div>

        <Heading
          /* Options */
          htmlEntity={"h2"}
          text={"Social"}
          color={"black"}
          size={"medium"}
          truncate={null}
        />

        <div className={"flex  flex-wrap  pt4"}>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"facebook"} color={"black"} size={24} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"twitter"} color={"black"} size={24} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"instagram"} color={"black"} size={24} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"soundcloud"} color={"black"} size={24} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"discord"} color={"black"} size={24} />
          </div>
          <div className={"col-24  col-4-md  col-2-lg  flex  mb4"}>
            <Icon icon={"youtube"} color={"black"} size={24} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
