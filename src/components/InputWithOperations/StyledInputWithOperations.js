

import styled, { css } from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Box from "../Box";
import { StyledCrossShape } from "../RoundButton/StyledRoundButton";
import { Base } from "../../themes";



const StyledInputWithOperations = styled(Box)`
  display: flex;
  height: ${props =>
    (props.size === "base" && props.theme.inputWithOperations.heightBox.base) ||
    (props.size === "middle" &&
      props.theme.inputWithOperations.heightBox.middle) ||
    (props.size === "big" && props.theme.inputWithOperations.heightBox.big) ||
    (props.size === "huge" && props.theme.inputWithOperations.heightBox.huge)};

  width: ${props =>
    (props.scale && "100%") ||
    (props.size === "base" && props.theme.input.width.base) ||
    (props.size === "middle" && props.theme.input.width.middle) ||
    (props.size === "big" && props.theme.input.width.big) ||
    (props.size === "huge" && props.theme.input.width.huge)};

  ${commonInputStyles} :focus-within:hover,
  :focus-within {
    border-color: ${props => props.theme.input.focusBorderColor};
  }

  ${commonInputStyles} :hover {
    border-color: ${props =>
      props.theme.input.focusBorderColor &&
      props.theme.inputWithOperations.hoverBorderColor};
  }

  border-color: ${props => props.disabled && props.theme.input.borderColor};

  .textInput__operations {
    height: ${props =>
      (props.size === "base" &&
        props.theme.inputWithOperations.heightOperations.base) ||
      (props.size === "middle" &&
        props.theme.inputWithOperations.heightOperations.middle) ||
      (props.size === "big" && props.theme.inputWithOperations.heightOperations.big) ||
      (props.size === "huge" &&
        props.theme.inputWithOperations.heightOperations.huge)};
    border-radius: 0px;
    background: ${props =>
      props.disabled
        ? props.theme.input.disableBackgroundColor
        : props.theme.input.backgroundColor};
  }

  .left {
    border-bottom-left-radius: ${props =>
      props.theme.inputWithOperations.sizeOperations};
    border-top-left-radius: ${props =>
      props.theme.inputWithOperations.sizeOperations};
    border-right: ${props => props.theme.input.border};
    border-right-color: ${props => props.theme.inputWithOperations.borderColor};
  }
  .right {
    border-bottom-right-radius: ${props =>
      props.theme.inputWithOperations.sizeOperations};
    border-top-right-radius: ${props =>
      props.theme.inputWithOperations.sizeOperations};
    border-left: ${props => props.theme.input.border};
    border-left-color: ${props => props.theme.inputWithOperations.borderColor};
  }
  .textInput__operations:hover {
    background: ${props =>
      props.theme.inputWithOperations.backgroundOperations};
    transition: background 0s;
  }
  .textInput__operations:active {
    background: ${props =>
      props.theme.inputWithOperations.backgroundOperations};
    transition: background 0s;
  }
  .textInput__operations:disabled {
    background: ${props => props.theme.input.disableBackgroundColor};
  }

  ${StyledCrossShape}:after {
    background: ${props =>
      props.disabled
        ? props.theme.inputWithOperations.hoverBorderColor
        : props.theme.inputWithOperations.backgroundLines};
  }

  ${StyledCrossShape} {
    background: ${props =>
      props.disabled
        ? props.theme.inputWithOperations.hoverBorderColor
        : props.theme.inputWithOperations.backgroundLines};
  }

  .textInput__operations--input::-webkit-outer-spin-button,
  .textInput__operations--input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .textInput__operations--input:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .textInput__operations--input {
    text-align: center;
  }
  .textInput__operations--input::placeholder {
    color: ${props => props.theme.inputWithOperations.hoverBorderColor};
  }
`;

StyledInputWithOperations.defaultProps = { theme: Base };

export default StyledInputWithOperations;
