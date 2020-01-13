import React from "react";
import PropTypes from "prop-types";
import { RadioButtonIcon, RadioButtonIconChecked } from "./svg";
import {
  StyledRadioButton,
  HiddenInput,
  StyledText
} from "./StyledRadioButton";

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
      <StyledText as="span" disabled={disabled} reverse={reverse}>
        {label}
      </StyledText>
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

    return (
      <StyledRadioButton {...rest}>
        {label ? (
          reverse ? (
            <>
              {this.renderLabel()}
              {this.renderRadioButton()}
            </>
          ) : (
            <>
              {this.renderRadioButton()}
              {this.renderLabel()}
            </>
          )
        ) : (
          this.renderRadioButton()
        )}

        <HiddenInput
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
