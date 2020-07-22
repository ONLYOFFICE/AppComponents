import React from "react";
import isEqual from "lodash/isEqual";
import TextInput from "../TextInput";
import StyledFixedInput from "./StyledFixedInput";

class FixedInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {

    //console.log(`TextInput render`);
    return (
      <div>
        <StyledFixedInput
          error={this.props.error}
          size={this.props.size}
          warning={this.props.warning}
          disabled={this.props.disabled}

        >
          <TextInput {...this.props} border={false}  scale/>
          <div>
            <span>.com</span>
          </div>
        </StyledFixedInput>
      </div>
    );
  }
}

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
