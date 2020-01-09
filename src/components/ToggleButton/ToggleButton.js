import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { ToggleButtonIcon, ToggleButtonCheckedIcon } from "./svg";
import { StyledToggleButton, HiddenInput } from "./StyledToggleButton";

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
    const colorProps = disabled ? { color: "#A3A9AE" } : {};
    const { checked } = this.state;

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
          checked ? ToggleButtonCheckedIcon : ToggleButtonIcon
        )}

        {label && (
          <Text className="toggleText" as="span" {...colorProps}>
            {label}
          </Text>
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
