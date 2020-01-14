import React from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";

const Input = ({
  keepCharPositions,
  border,
  scale,
  warning,
  error,
  mask,
  ...rest
}) => {
  const newProps = {
    ...rest,
    border: border ? 1 : 0,
    scale: scale ? 1 : 0,
    warning: warning ? 1 : 0,
    error: error ? 1 : 0
  };

  //console.log("Input render");
  return mask != null ? (
    <MaskedInput
      keepCharPositions={keepCharPositions}
      mask={mask}
      {...newProps}
    />
  ) : (
    <input {...newProps} />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email"]),
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  autoComplete: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),

  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  scale: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  border: PropTypes.bool,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  keepCharPositions: PropTypes.bool
};

Input.defaultProps = {
  type: "text",
  value: "",
  maxLength: 255,
  size: "base",
  tabIndex: -1,
  autoComplete: "off",
  border: true,
  keepCharPositions: false
};

export default Input;
