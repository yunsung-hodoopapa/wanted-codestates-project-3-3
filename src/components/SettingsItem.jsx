import React, { useRef } from "react";

const SettingsItem = ({ title, item, setItems, id }) => {
  const check = useRef();
  const clickCheckbox = () => {
    setItems(check.current.checked);
  };

  return (
    <div className="setting-item">
      <p>{title}</p>
      <div className="switch-box">
        <input
          onChange={clickCheckbox}
          ref={check}
          type="checkbox"
          id={id}
          className="switch-checkbox"
          checked={item}
        />
        <label htmlFor={id} className="switch-label">
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default SettingsItem;
