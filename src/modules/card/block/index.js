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

  const renderContents = () => {
    const renderLabels = () => {
      if (!labelBlock.length) return false;

      const listItems = labelBlock.map(label => (
        <span key={label} className="card__label">
          {label}
        </span>
      ));

      return <div className="card__label-block">{listItems}</div>;
    };

    return (
      <div className="card__contents-wrapper">
        {labelBlock && renderLabels()}
        {title && <div className="card__title">{title}</div>}
        {description && <div className="card__description">{description}</div>}
      </div>
    );
  };

  return (
    <div className="card  card--small">
      {image && <div className="card__image">{image}</div>}
      {renderContents()}
      <div className="card__button-wrapper">{button}</div>
    </div>
  );
}
