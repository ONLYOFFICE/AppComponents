import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { ToggleButtonIcon, ToggleButtonCheckedIcon } from "./svg";
import { StyledToggleButton, StyledHiddenInput } from "./StyledToggleButton";

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
      <Text
        as="span"
        className="toggle-button-text"
        reverse={reverse}
        disabled={disabled}
      >
        {label}
      </Text>
    );
  };

  renderToggle = () => {
    const { checked } = this.props;

    return <>{checked ? <ToggleButtonCheckedIcon /> : <ToggleButtonIcon />}</>;
  };

  render() {
    const { disabled, reverse, label } = this.props;
    const { onChange, ...rest } = this.props;
    const { checked } = this.state;

    const firstComponent = reverse ? this.renderLabel() : this.renderToggle();
    const secondComponent = reverse ? this.renderToggle() : this.renderLabel();

    //console.log("ToggleButton render");
    return (
      <StyledToggleButton {...rest}>
        {label ? (
          <>
            {firstComponent}
            {secondComponent}
          </>
        ) : (
          this.renderToggle()
        )}

        <StyledHiddenInput
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
