import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props) {
  library.add(fas);

  return (
    <div className="icon-wrapper">
      <FontAwesomeIcon {...props} />
    </div>
  );
}
