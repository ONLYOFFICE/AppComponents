import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import StyledTextInput from "./StyledTextInput";

class TextInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    //console.log(`TextInput render`);
    return <StyledTextInput {...this.props} />;
  }
}

TextInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email"]),
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  keepCharPositions: PropTypes.bool,

  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  scale: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  autoComplete: PropTypes.string
};

TextInput.defaultProps = {
  type: "text",
  value: "",
  maxLength: 255,
  size: "base",
  scale: false,
  tabIndex: -1,
  error: false,
  warning: false,
  autoComplete: "off",
  border: true,
  keepCharPositions: false
};

export default TextInput;
