import React from 'react';

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function CardBlock(props) {
  const {
    /* Options */
    type,
    tag,
    onClick,
    /* Children */
    image,
    labelBlock,
    title,
    description,
    button
  } = props;

  const hasOnClick = onClick && { onClick };

  return (
    <div className="card  card--small">
      {image && <div className="card__image">{image}</div>}
      <div className="card__contents-wrapper">
        {labelBlock && labelBlock.length && (
          <div className="card__labels">{[...labelBlock]}</div>
        )}
        {title && <div className="card__title">{title}</div>}
        {description && <div className="card__description">{description}</div>}
      </div>
      <div className="card__button-wrapper">{button}</div>
    </div>
  );
}
