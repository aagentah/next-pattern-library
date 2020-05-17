import React, { useState, useEffect } from "react";
import _ from "lodash";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

/**
 * Parallax
 */

export default function PageThemeParallax() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  });

  const windowHeight =
    document.documentElement.scrollHeight ||
    document.documentElement.offsetHeight ||
    window.document.body.offsetHeight;
  let numberOfItems;
  let numberOfItemsToLoop = [];

  switch (true) {
    case windowHeight >= 0 && windowHeight < 1000:
      numberOfItems = 4;
      break;
    case windowHeight >= 1000 && windowHeight < 200:
      numberOfItems = 8;
      break;
    case windowHeight >= 200 && windowHeight < 3000:
      numberOfItems = 12;
      break;
  }

  for (let i = 0; i < numberOfItems; i++) {
    numberOfItemsToLoop.push(i);
  }

  const renderIcon = index => {
    const divideHeight = windowHeight / numberOfItems;

    // set wrapper style
    const wrapperStyles = {
      [_.sample(["left", "right"])]: `${_.random(-200, -100)}px`,
      top: divideHeight * (index + 1) + "px",
      width: _.random(50, 150) + "px",
      opacity: _.random(0.1, 1)
    };

    // create item
    return (
      <div
        key={index}
        className="page-theme-parallax__wrapper"
        style={wrapperStyles}
      >
        <Parallax
          y={[_.random(-200, 200), _.random(-200, 200)]}
          tagOuter="figure"
        >
          <img
            className={`page-theme-parallax__icon`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/%E6%A5%8A%E5%A7%93_-_%E6%A5%B7%E4%BD%93.svg/440px-%E6%A5%8A%E5%A7%93_-_%E6%A5%B7%E4%BD%93.svg.png"
          />
        </Parallax>
      </div>
    );
  };

  if (render) {
    return (
      <ParallaxProvider>
        <div className="container  mla  mra  relative">
          {numberOfItemsToLoop.map((index, i) => {
            return renderIcon(index, i);
          })}
        </div>
      </ParallaxProvider>
    );
  }

  return null;
}
