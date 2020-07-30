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
    const { fixedText } = this.props;
    return (
      <StyledFixedInput
        error={this.props.error}
        size={this.props.size}
        warning={this.props.warning}
        disabled={this.props.disabled}
        scale={this.props.scale}
        style={this.props.style}
      >
        <TextInput
          {...this.props}
      border = {false}
      
          className="textInput__fixed--input"
        />
        <Text className="textInput__fixed" title={fixedText}>
          {fixedText}
        </Text>
      </StyledFixedInput>
    );
  }
}

FixedInput.propTypes = {
  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  scale: PropTypes.bool,
  style: PropTypes.object
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
