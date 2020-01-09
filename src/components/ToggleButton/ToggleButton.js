import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToggleButtonIcon, ToggleButtonCheckedIcon } from "./svg";
import {
  StyledToggleButton,
  HiddenInput,
  StyledText
} from "./StyledToggleButton";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  render() {
    const { disabled, label } = this.props;
    const { onChange, ...rest } = this.props;
    const { checked } = this.state;
    const newProps = { className: "toggle-button" };

    //console.log("ToggleButton render");
    return (
      <StyledToggleButton {...rest}>
        <HiddenInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />

        {React.createElement(
          checked ? ToggleButtonCheckedIcon : ToggleButtonIcon,
          { ...newProps }
        )}

        {label && (
          <StyledText as="span" disabled={disabled}>
            {label}
          </StyledText>
        )}
      </StyledToggleButton>
    );
  }
}

ToggleButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default ToggleButton;
