import React from "react";

/**
 * Avatar
 */

export default function Avatar(props) {
  const {
    /* Options */
    /* Children */
    image,
    title,
    description
  } = props;

  return (
    <address className="avatar  flex  flex-wrap  avatar">
      <div className="col-24  col-3-md  avatar__image">{image}</div>
      <div className="col-24  col-21-md  avatar__dialog">
        {title && <div className="avatar__title">{title}</div>}
        {description && <p className="avatar__description">{description}</p>}
      </div>
    </address>
  );
}
