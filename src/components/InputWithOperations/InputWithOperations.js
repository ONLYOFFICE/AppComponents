import React, { useState } from "react";
import isEqual from "lodash/isEqual";
import TextInput from "../TextInput";
import RoundButton from "../RoundButton";
import StyledInputWithOperations from "./StyledInputWithOperations";
import PropTypes from "prop-types";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/react";


class InputWithOperations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value
    };
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
        <RoundButton
          {...this.props}
          type={"minus"}
          className="textInput__operations left"
          onClick={() => {
            this.setState({
              counter:
                this.state.counter * 1 - 1 >= 0 ? this.state.counter * 1 - 1 : 0
            });
          }}
        />
        <TextInput
          {...this.props}
          id="myElement"
          border={false}
          type="number"
          className="textInput__operations--input"
          value={ this.state.counter === 0 ? this.props.value  : this.state.counter}

          onChange={e => {
            this.setState({
              counter:
                +e.target.value
            });
            
          }}

        />
        <RoundButton
          {...this.props}
          type={"plus"}
          className="textInput__operations right"
          onClick={() => {
            this.setState({
              counter: this.state.counter * 1 + 1
            });
          }}
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
