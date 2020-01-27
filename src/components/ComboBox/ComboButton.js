import React from "react";
import PropTypes from "prop-types";
import { ExpanderDownIcon } from "./svg";
import Text from "../Text";
import {
  StyledArrowIcon,
  StyledComboButton,
  StyledOptionalItem
} from "./StyledComboBox";

class ComboButton extends React.Component {
  render() {
    const {
      noBorder,
      onClick,
      disabled,
      innerContainer,
      innerContainerClassName,
      selectedOption,
      optionsLength,
      withOptions,
      withAdvancedOptions,
      open,
      scaled,
      size
    } = this.props;

    const boxIconColor = disabled ? "#D0D5DA" : "#333";
    const arrowIconColor = disabled ? "#D0D5DA" : "#A3A9AE";
    const defaultIconColor = selectedOption.default
      ? arrowIconColor
      : boxIconColor;

    return (
      <StyledComboButton
        open={open}
        disabled={disabled}
        noBorder={noBorder}
        containOptions={optionsLength}
        withAdvancedOptions={withAdvancedOptions}
        onClick={onClick}
        scaled={scaled}
        size={size}
      >
        {innerContainer && (
          <StyledOptionalItem
            className={innerContainerClassName}
            color={defaultIconColor}
          >
            {innerContainer}
          </StyledOptionalItem>
        )}
        <Text
          noBorder={noBorder}
          title={selectedOption.label}
          as="div"
          truncate={true}
          fontWeight={600}
          className="combo-button-label"
          color={
            selectedOption.default
              ? arrowIconColor + " !important"
              : boxIconColor
          }
        >
          {selectedOption.label}
        </Text>
        <StyledArrowIcon
          needDisplay={withOptions || withAdvancedOptions}
          noBorder={noBorder}
          open={open}
        >
          {(withOptions || withAdvancedOptions) && (
            <ExpanderDownIcon className="expander-down-icon" />
          )}
        </StyledArrowIcon>
      </StyledComboButton>
    );
  }
}

ComboButton.propTypes = {
  noBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  selectedOption: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  withOptions: PropTypes.bool,
  optionsLength: PropTypes.number,
  withAdvancedOptions: PropTypes.bool,
  innerContainer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  innerContainerClassName: PropTypes.string,
  open: PropTypes.bool,
  size: PropTypes.oneOf(["base", "middle", "big", "huge", "content"]),
  scaled: PropTypes.bool,
  onClick: PropTypes.func
};

ComboButton.defaultProps = {
  noBorder: false,
  disabled: false,
  withOptions: true,
  withAdvancedOptions: false,
  innerContainerClassName: "innerContainer",
  open: false,
  size: "content",
  scaled: false
};

export default ComboButton;
