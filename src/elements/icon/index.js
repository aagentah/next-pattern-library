import React from "react";

export default function Icon(props) {
  const { icon } = props;

  if (icon) {
    return icon;
  }

  return false;
}
