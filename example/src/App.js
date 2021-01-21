import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// elements
import ButtonPreview from './docs/elements/button';
import HeadingPreview from './docs/elements/heading';
import CopyPreview from './docs/elements/copy';
import ImagePreview from './docs/elements/image';
import LabelPreview from './docs/elements/label';
import IconPreview from './docs/elements/icon';
import InputPreview from './docs/elements/input';
import CheckboxPreview from './docs/elements/checkbox';
import RadioPreview from './docs/elements/radio';

// utils
import WithLink from './docs/utils/with-link';

export default function App() {
  return (
    <Router>
      <div className="flex  flex-wrap">
        <main className="docs-main">
          <div className="container  mla  mra">
            <Route exact path="/" component={null} />
            {/* Elements */}
            <Route path="/button" component={ButtonPreview} />
            <Route path="/heading" component={HeadingPreview} />
            <Route path="/copy" component={CopyPreview} />
            <Route path="/image" component={ImagePreview} />
            <Route path="/label" component={LabelPreview} />
            <Route path="/icon" component={IconPreview} />
            <Route path="/input" component={InputPreview} />
            <Route path="/checkbox" component={CheckboxPreview} />
            <Route path="/radio" component={RadioPreview} />

            {/* Utils */}
            <Route path="/with-link" component={WithLink} />
          </div>
        </main>
        <nav className="docs-nav  pv4  pr4  pl2">
          <div className="docs-nav__inner  pa4  bg-almost-white  shadow2  br4">
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
              <li className="mb1">
                <Link to="/checkbox">Checkbox</Link>
              </li>
              <li className="mb1">
                <Link to="/radio">Radio</Link>
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
      </div>
    </Router>
  );
}
