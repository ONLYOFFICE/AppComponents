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

  ${commonInputStyles} :focus-within {
    border-color: ${props => props.theme.textFixedInput.inputBorder};
  }

  ${commonInputStyles} :hover {
    border-color: #a3a9ae;
  }

  border-color: ${props => props.disabled && props.theme.input.borderColor};

  input::placeholder {
    color: #a3a9ae;
  }

  div span {
    position: absolute;
    background-color: #f8f9f9;
    color: #a3a9ae;
    border-left: 1px solid #d0d5da;
    width: ${props =>
      (props.size === "base" && props.theme.textFixedInput.width.base) ||
      (props.size === "middle" && props.theme.textFixedInput.width.middle) ||
      (props.size === "big" && props.theme.textFixedInput.width.big) ||
      (props.size === "huge" && props.theme.textFixedInput.width.huge)};
    height: ${props =>
      (props.size === "base" && props.theme.textFixedInput.height.base) ||
      (props.size === "middle" && props.theme.textFixedInput.height.middle) ||
      (props.size === "big" && props.theme.textFixedInput.height.big) ||
      (props.size === "huge" && props.theme.textFixedInput.height.huge)};
    font-size: ${props =>
      (props.size === "base" && props.theme.textFixedInput.font_size.base) ||
      (props.size === "middle" &&
        props.theme.textFixedInput.font_size.middle) ||
      (props.size === "big" && props.theme.textFixedInput.font_size.big) ||
      (props.size === "huge" && props.theme.textFixedInput.font_size.huge)};
    padding: 6px 8px;
    right: 0px;
    top: 0px;
    cursor: default;
  }
`;

StyledFixedInput.defaultProps = { theme: Base };

export default StyledFixedInput;
