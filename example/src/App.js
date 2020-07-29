import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// modules
import HeroPreview from './docs/modules/hero';
import CardBlockPreview from './docs/modules/card/block';
import CardThumbnailPreview from './docs/modules/card/thumbnail';
import AvatarPreview from './docs/modules/avatar';
import ModalPreview from './docs/modules/modal';
import TabsPreview from './docs/modules/tabs';

// elements
import ButtonPreview from './docs/elements/button';
import HeadingPreview from './docs/elements/heading';
import CopyPreview from './docs/elements/copy';
import ImagePreview from './docs/elements/image';
import LabelPreview from './docs/elements/label';
import IconPreview from './docs/elements/icon';
import InputPreview from './docs/elements/input';

// utils
import WithLink from './docs/utils/with-link';

export default function App() {
  return (
    <Router>
      <div className="flex  flex-wrap">
        <nav className="docs-nav">
          <div className="pa3">
            <h1 className="t-title  f5  bold  mb2">Modules</h1>
            <ul className="pa0  ma0  mb3  ls-none">
              <li className="mb1">
                <Link to="/hero">Hero</Link>
              </li>
              <li className="mb1">
                <Link to="/card/block">Card (Block)</Link>
              </li>
              <li className="mb1">
                <Link to="/card/thumbnail">Card (Thumbnail)</Link>
              </li>
              <li className="mb1">
                <Link to="/avatar">Avatar</Link>
              </li>
              <li className="mb1">
                <Link to="/modal">Modal</Link>
              </li>
              <li className="mb1">
                <Link to="/tabs">Tabs</Link>
              </li>
            </ul>

            <h1 className="t-title  f5  bold  mb2">Elements</h1>
            <ul className="pa0  ma0  mb3  ls-none">
              <li className="mb1">
                <Link to="/button">Button</Link>
              </li>
              <li className="mb1">
                <Link to="/heading">Heading</Link>
              </li>
              <li className="mb1">
                <Link to="/copy">Copy</Link>
              </li>
              <li className="mb1">
                <Link to="/image">Image</Link>
              </li>
              <li className="mb1">
                <Link to="/label">Label</Link>
              </li>
              <li className="mb1">
                <Link to="/icon">Icon</Link>
              </li>
              <li className="mb1">
                <Link to="/input">Input</Link>
              </li>
            </ul>

            <h1 className="t-title  f5  bold  mb2">Utils</h1>
            <ul className="pa0  ma0  mb3  ls-none">
              <li className="mb1">
                <Link to="/with-link">WithLink</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="docs-main">
          <Route exact path="/" component={null} />
          {/* Modules */}
          <Route exact path="/hero" component={HeroPreview} />
          <Route path="/card/block" component={CardBlockPreview} />
          <Route path="/card/thumbnail" component={CardThumbnailPreview} />
          <Route path="/avatar" component={AvatarPreview} />
          <Route path="/modal" component={ModalPreview} />
          <Route path="/tabs" component={TabsPreview} />
          {/* Elements */}
          <Route path="/button" component={ButtonPreview} />
          <Route path="/heading" component={HeadingPreview} />
          <Route path="/copy" component={CopyPreview} />
          <Route path="/image" component={ImagePreview} />
          <Route path="/label" component={LabelPreview} />
          <Route path="/icon" component={IconPreview} />
          <Route path="/input" component={InputPreview} />

          {/* Utils */}
          <Route path="/with-link" component={WithLink} />
        </main>
      </div>
    </Router>
  );
}