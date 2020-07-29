import React, { useState } from 'react';

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Tabs(props) {
  const {
    /* Options */
    content
  } = props;

  const [visibleTab, setVisibleTab] = React.useState(content[0].id);

  const listTitles = content.map(item => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id
          ? 'tabs__nav-item  tabs__nav-item--active'
          : 'tabs__nav-item'
      }
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = content.map(item => (
    <p style={visibleTab === item.id ? {} : { display: 'none' }}>
      {item.tabContent}
    </p>
  ));

  return (
    <div className="tabs">
      <ul className="tabs__nav">{listTitles}</ul>
      <div className="tabs__content">{listContent}</div>
    </div>
  );
}
