import styled, { css }from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Box from "../Box";
import { Base } from "../../themes";

const StyledFixedInput = styled(Box)`
  display: flex;
  position: relative;

  width: ${props =>
    (props.size === "base" && props.theme.input.width.base) ||
    (props.size === "middle" && props.theme.input.width.middle) ||
    (props.size === "big" && props.theme.input.width.big) ||
    (props.size === "huge" && props.theme.input.width.huge)};

  ${commonInputStyles} :focus-within:hover,:focus-within  {
    border-color: ${props => props.theme.fixedInput.focusBorderColor};
  }

  ${commonInputStyles} :hover {
    border-color: ${props =>
      props.theme.fixedInput.focusBorderColor &&
      props.theme.fixedInput.hoverBorderColor};
  }

  border-color: ${props => props.disabled && props.theme.input.borderColor};

  .textInput__fixed--input::placeholder {
    color: ${props => props.theme.fixedInput.hoverBorderColor};
  }

  .textInput__fixed--input {
    width: ${props =>
      (props.size === "base" && props.theme.fixedInput.inputWidth.base) ||
      (props.size === "middle" && props.theme.fixedInput.inputWidth.middle) ||
      (props.size === "big" && props.theme.fixedInput.inputWidth.big) ||
      (props.size === "huge" && props.theme.fixedInput.inputWidth.huge)};
  }

  .textInput__fixed {
    position: absolute;
    background-color: ${props => props.theme.fixedInput.fixedBackgroundColor};
    color: ${props => props.theme.fixedInput.hoverBorderColor};
    border-left: 1px solid #d0d5da;

    width: ${props =>
      (props.size === "base" && props.theme.fixedInput.width.base) ||
      (props.size === "middle" && props.theme.fixedInput.width.middle) ||
      (props.size === "big" && props.theme.fixedInput.width.big) ||
      (props.size === "huge" && props.theme.fixedInput.width.huge)};

    height: ${props =>
      (props.size === "base" && props.theme.fixedInput.height.base) ||
      (props.size === "middle" && props.theme.fixedInput.height.middle) ||
      (props.size === "big" && props.theme.fixedInput.height.big) ||
      (props.size === "huge" && props.theme.fixedInput.height.huge)};

    font-size: ${props =>
      (props.size === "base" && props.theme.fixedInput.font_size.base) ||
      (props.size === "middle" && props.theme.fixedInput.font_size.middle) ||
      (props.size === "big" && props.theme.fixedInput.font_size.big) ||
      (props.size === "huge" && props.theme.fixedInput.font_size.huge)};

    padding: 6px 8px;
    right: 0px;
    top: 0px;
    cursor: default;
  }
`;

StyledFixedInput.defaultProps = { theme: Base };

export default StyledFixedInput;
