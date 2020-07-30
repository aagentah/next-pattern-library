import React, { useState } from 'react';

/**
 * A card displays site content in a manner similar to a playing card.
 */

export default function Tabs(props) {
  const {
    /* Options */
    content,
    defaultSelected
  } = props;

  const [visibleTab, setVisibleTab] = useState(content[defaultSelected].id);

  const listTitles = content.map(item => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={`tabs__desktop-nav__item ${
        visibleTab === item.id ? 'active' : ''
      }`}
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = content.map(item => (
    <div
      className={`tabs__body__item ${visibleTab === item.id ? 'active' : ''}`}
    >
      <div
        class="tabs__mobile-nav__item"
        onClick={() => setVisibleTab(item.id)}
      >
        {item.tabTitle}
      </div>
      <div className="tabs__content">{item.tabContent}</div>
    </div>
  ));

  return (
    <div className="tabs">
      <ul className="tabs__desktop-nav">{listTitles}</ul>
      <div className="tabs__body">{listContent}</div>
    </div>
  );
}
