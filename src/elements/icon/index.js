import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icon(props) {
  library.add(fas);
  library.add(fab);
  library.add(far);

  return (
    <div className="icon-wrapper">
      <FontAwesomeIcon {...props} />
    </div>
  );
}
