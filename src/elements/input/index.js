import React, { useState } from "react";
import classNames from "classnames";

/**
 * A Input.
 */

export default function Input(props) {
  const [hasValue, setHasValue] = useState(false);

  const {
    /* Options */
    type,
    label,
    name,
    ref,
    required,
    disabled,
    readOnly
  } = props;

  const hasValueClass = classNames({
    "has-value": hasValue
  });

  const handleInput = e => {
    if (e.target.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  return (
    <div className="input__wrapper">
      <input
        className={`input  input--${type}  input--${hasValueClass}`}
        type={type}
        name={name}
        ref={ref}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleInput}
      />
      {label && <span className="input__label">{label}</span>}
      <span class="input__focus-border"></span>
    </div>
  );
}
