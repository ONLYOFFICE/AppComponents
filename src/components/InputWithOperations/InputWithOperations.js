import React from "react";
import isEqual from "lodash/isEqual";
import TextInput from "../TextInput";
import RoundButton from "../RoundButton";
import StyledInputWithOperations from "./StyledInputWithOperations";
import PropTypes from "prop-types";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/react";
class InputWithOperations extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
const typeOptions = ["plus", "minus"];
    return (
      <StyledInputWithOperations
        error={this.props.error}
        size={this.props.size}
        warning={this.props.warning}
        disabled={this.props.disabled}
        scale={this.props.scale}
        style={this.props.style}
      >
        <RoundButton type={"minus"} className="textInput__operations" />
        
        <TextInput
          {...this.props}
          border={true}
          className="textInput__operations--input"
        />
        <RoundButton type={"plus"} className="textInput__operations" />
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
