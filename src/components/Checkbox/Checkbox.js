import React from "react";
import PropTypes from "prop-types";
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon
} from "./svg";
import Text from "../Text";
import { StyledCheckbox, StyledHiddenInput } from "./StyledCheckbox";

class Checkbox extends React.Component {
  renderLabel = () => {
    const { reverse, disabled, label, color } = this.props;

    return (
      <Text
        as="span"
        className="checkbox-text"
        reverse={reverse}
        disabled={disabled}
        color={color}
      >
        {label}
      </Text>
    );
  };

  renderCheckbox = () => {
    const { indeterminate, checked } = this.props;

    return (
      <>
        {indeterminate ? (
          <CheckboxIndeterminateIcon />
        ) : checked ? (
          <CheckboxCheckedIcon />
        ) : (
          <CheckboxIcon />
        )}
      </>
    );
  };

  render() {
    //console.log("Checkbox render");
    const { disabled, label, reverse, checked, color } = this.props;
    const { onChange, ...rest } = this.props;

    const firstComponent = reverse ? this.renderLabel() : this.renderCheckbox();
    const secondComponent = reverse
      ? this.renderCheckbox()
      : this.renderLabel();

    return (
      <StyledCheckbox {...rest}>
        {label ? (
          <>
            {firstComponent}
            {secondComponent}
          </>
        ) : (
          this.renderCheckbox()
        )}

        <StyledHiddenInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          color = {color}
          onChange={onChange}
        />
        {color}
      </StyledCheckbox>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
  color: PropTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  reverse: false
};

export default Checkbox;