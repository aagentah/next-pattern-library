import React from "react";

export default function Icon(props) {
  const { faClass } = props;

  if (faClass) {
    return (
      <div>
        yo
        <span className={`icon  ${faClass}`}></span>
      </div>
    );
  }

  return false;
}
