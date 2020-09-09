import React, { useState, useEffect } from 'react';

/**
 * A Input.
 */

export default function Input(props) {
  const [checkedValue, setCheckedValue] = useState('');

  const {
    /* Options */
    label,
    name,
    checked,
    required,
    disabled,
    readOnly
  } = props;

  useEffect(() => {
    if (checked) {
      setCheckedValue(checked);
    }
  }, [checked]);

  const handleInput = e => {
    setCheckedValue(e.target.checked);
  };

  return (
    <div className="checkbox__wrapper">
      <label className="checkbox__control  flex  align-center">
        <input
          type="checkbox"
          className="checkbox__input"
          name={name}
          checked={checkedValue}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleInput}
        />

        <div className="checkbox__indicator"></div>
        <span className="checkbox__label">{label}</span>
      </label>
    </div>
  );
}
