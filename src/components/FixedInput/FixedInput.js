import React from "react";
import isEqual from "lodash/isEqual";
import TextInput from "../TextInput";
import Text from "../Text";
import StyledFixedInput from "./StyledFixedInput";
import PropTypes from "prop-types";

class FixedInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    return (
        <StyledFixedInput
          error={this.props.error}
          size={this.props.size}
          warning={this.props.warning}
          disabled={this.props.disabled}
        >
          <TextInput {...this.props} border={false} className="textInput__fixed--input"/>
          <Text className="textInput__fixed">.com</Text>
        </StyledFixedInput>
    );
  }
}

FixedInput.propTypes = {
  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool
};

FixedInput.defaultProps = {
  type: "text",
  value: "",
  maxLength: 255,
  size: "base",
  tabIndex: -1,
  autoComplete: "off",
  border: true,
  keepCharPositions: false
};

export default FixedInput;
