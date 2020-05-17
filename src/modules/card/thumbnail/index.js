import React from "react";

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function CardThumbnail(props) {
  const {
    /* Options */
    type,
    onClick,
    /* Children */
    image,
    labelBlock,
    title,
    description,
    button
  } = props;

  const hasOnClick = onClick ? { onClick } : "";

  const renderContents = () => {
    const renderLabels = () => {
      if (!labelBlock.length) return false;

      const listItems = labelBlock.map(label => (
        <span className="card__label" key={"key"}>
          {label}
        </span>
      ));

      return (
        <div className="flex  flex-wrap  card__label-block">{listItems}</div>
      );
    };

    return (
      <div className="flex  flex-wrap  align-start  card__contents-wrapper">
        {labelBlock && renderLabels()}
        <div className="col-24">
          {title && <div className="card__title">{title}</div>}
          {description && (
            <div className="card__description">{description}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="card  card--small  flex  flex-wrap">
      {image && <div className="col-6">{image}</div>}
      <div className="col-18  pa2">
        {renderContents()}
        <div className="flex  flex-wrap  align-start  card__button-wrapper">
          {button}
        </div>
      </div>
    </div>
  );
}
