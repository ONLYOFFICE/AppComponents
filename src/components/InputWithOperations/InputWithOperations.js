import React from "react";
import isEqual from "lodash/isEqual";
import TextInput from "../TextInput";

import StyledInputWithOperations from "./StyledInputWithOperations";
import PropTypes from "prop-types";

class InputWithOperations extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {

    return (
      <StyledInputWithOperations
        error={this.props.error}
        size={this.props.size}
        warning={this.props.warning}
        disabled={this.props.disabled}
        scale={this.props.scale}
        style={this.props.style}
      >
        <TextInput
          {...this.props}
          border={true}
          className="textInput__operations--input"
        />

      </StyledInputWithOperations>
    );
  }
}

InputWithOperations.propTypes = {
  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  scale: PropTypes.bool,
  style: PropTypes.object
};

InputWithOperations.defaultProps = {
  type: "text",
  value: "",
  maxLength: 255,
  size: "base",
  tabIndex: -1,
  autoComplete: "off",
  border: true,
  keepCharPositions: false
};

export default InputWithOperations;
