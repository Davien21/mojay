import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group my-4">
      <label htmlFor={name}>{label}</label>

      <input
        {...rest}
        name={name}
        // autoFocus
        id={name}
        className="default_style py-1"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
