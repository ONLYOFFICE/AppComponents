

import styled, { css } from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Box from "../Box";
import { StyledCrossShape } from "../RoundButton/StyledRoundButton";
import { Base } from "../../themes";

const CrossShapeColor = props =>
  props.disabled
    ? "red"
    : "red";

const StyledInputWithOperations = styled(Box)`
  display: flex;

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
      props.theme.input.focusBorderColor && props.theme.input.hoverBorderColor};
  }

  border-color: ${props => props.disabled && props.theme.input.borderColor};

  .textInput__operations {
    border-radius: 0px;
    background: #ffffff;
  }
   .left{
    border-right: 1px solid #d0d5da;
  }
  .right{
    border-left: 1px solid #d0d5da;
  }
  .textInput__operations:active {
    background: #eceef1;
    transition: background 0s;
  }

  ${StyledCrossShape}:after {
    background:#657077;
  }

  ${StyledCrossShape} {
    /* background: ${props => CrossShapeColor(props)}; */
    background:#657077;
  }

  .textInput__operations--input::-webkit-outer-spin-button,
  .textInput__operations--input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  .textInput__operations--input:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .textInput__operations--input {
    text-align: center;
  }
  .textInput__operations--input::placeholder{
    color: #A3A9AE;
  }
`;

StyledInputWithOperations.defaultProps = { theme: Base };

export default StyledInputWithOperations;
