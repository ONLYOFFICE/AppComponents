import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { RadioButtonIcon, RadioButtonIconChecked } from "./svg";
import { StyledRadioButton, StyledHiddenInput } from "./StyledRadioButton";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  onInputChange = e => {
    this.setState({ checked: true });
    this.props.onClick && this.props.onClick(e);
  };

  renderLabel = () => {
    const { disabled, reverse, label } = this.props;

    return (
      <Text
        as="span"
        className="radio-button-text"
        disabled={disabled}
        reverse={reverse}
      >
        {label}
      </Text>
    );
  };

  renderRadioButton = () => {
    const { checked } = this.props;

    return (
      <>
        {React.createElement(
          checked ? RadioButtonIconChecked : RadioButtonIcon,
          { className: "radio-button" }
        )}
      </>
    );
  };

  render() {
    //console.log("Radio-button render");
    const { label, disabled, value, reverse, checked } = this.props;
    const { onClick, ...rest } = this.props;

    const firstComponent = reverse
      ? this.renderLabel()
      : this.renderRadioButton();
    const secondComponent = reverse
      ? this.renderRadioButton()
      : this.renderLabel();

    return (
      <StyledRadioButton {...rest}>
        {label ? (
          <>
            {firstComponent}
            {secondComponent}
          </>
        ) : (
          this.renderRadioButton()
        )}

        <StyledHiddenInput
          type="radio"
          value={value}
          checked={checked}
          onChange={this.onInputChange}
          disabled={disabled}
        />
      </StyledRadioButton>
    );
  }
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  reverse: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false,
  reverse: false
};

export default RadioButton;
