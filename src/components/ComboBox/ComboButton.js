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
      withoutBorder,
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

    const defaultOption = selectedOption.default;

    return (
      <StyledComboButton
        open={open}
        disabled={disabled}
        withoutBorder={withoutBorder}
        containOptions={optionsLength}
        withAdvancedOptions={withAdvancedOptions}
        onClick={onClick}
        scaled={scaled}
        size={size}
      >
        {innerContainer && (
          <StyledOptionalItem
            className={innerContainerClassName}
            disabled={disabled}
            defaultOption={defaultOption}
          >
            {innerContainer}
          </StyledOptionalItem>
        )}
        <Text
          withoutBorder={withoutBorder}
          title={selectedOption.label}
          as="div"
          truncate
          fontWeight={600}
          className="combo-button-label"
          defaultOption={defaultOption}
        >
          {selectedOption.label}
        </Text>
        <StyledArrowIcon
          needDisplay={withOptions || withAdvancedOptions}
          withoutBorder={withoutBorder}
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
  withoutBorder: PropTypes.bool,
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
  withoutBorder: false,
  disabled: false,
  withOptions: true,
  withAdvancedOptions: false,
  innerContainerClassName: "innerContainer",
  open: false,
  size: "content",
  scaled: false
};

export default ComboButton;
