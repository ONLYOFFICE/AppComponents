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
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  maxLength: PropTypes.number,
  tabIndex: PropTypes.number,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  scale: PropTypes.bool,
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
