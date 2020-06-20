import React from "react";

export default function Icon(props) {
  const { faClass } = props;

  if (faClass) {
    return <i className={`icon  ${faClass}`}></i>;
  }

  return false;
}
