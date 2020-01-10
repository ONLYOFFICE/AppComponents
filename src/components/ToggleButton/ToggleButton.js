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

  renderLabel = () => {
    const { disabled, label, reverse } = this.props;

    return (
      <StyledText as="span" reverse={reverse} disabled={disabled}>
        {label}
      </StyledText>
    );
  };

  renderToggle = () => {
    const { checked } = this.props;

    return (
      <>
        {React.createElement(
          checked ? ToggleButtonCheckedIcon : ToggleButtonIcon
        )}
      </>
    );
  };

  render() {
    const { disabled, reverse, label } = this.props;
    const { onChange, ...rest } = this.props;
    const { checked } = this.state;

    //console.log("ToggleButton render");
    return (
      <StyledToggleButton {...rest}>
        {label ? (
          reverse ? (
            <>
              {this.renderLabel()}
              {this.renderToggle()}
            </>
          ) : (
            <>
              {this.renderToggle()}
              {this.renderLabel()}
            </>
          )
        ) : (
          this.renderToggle()
        )}

        <HiddenInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
      </StyledToggleButton>
    );
  }
}

ToggleButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  reverse: PropTypes.bool
};

ToggleButton.defaultProps = {
  checked: false,
  reverse: false
};

export default ToggleButton;
