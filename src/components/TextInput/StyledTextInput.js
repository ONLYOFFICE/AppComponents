import styled from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Input from "./Input";
import { Base } from "../../themes";

const StyledTextInput = styled(Input)`
  ${commonInputStyles}
  -webkit-appearance: ${props => props.theme.textInput.appearance};
  display: ${props => props.theme.textInput.display};
  flex: ${props => props.theme.textInput.flex};
  outline: ${props => props.theme.textInput.outline};
  overflow: ${props => props.theme.textInput.overflow};

  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.textInput.fontWeight};

  line-height: ${props =>
    (props.size === "base" && props.theme.textInput.lineHeight.base) ||
    (props.size === "middle" && props.theme.textInput.lineHeight.middle) ||
    (props.size === "big" && props.theme.textInput.lineHeight.big) ||
    (props.size === "huge" && props.theme.textInput.lineHeight.huge)};

  font-size: ${props =>
    (props.size === "base" && props.theme.textInput.fontSize.base) ||
    (props.size === "middle" && props.theme.textInput.fontSize.middle) ||
    (props.size === "big" && props.theme.textInput.fontSize.big) ||
    (props.size === "huge" && props.theme.textInput.fontSize.huge)};

  padding: ${props =>
    (props.size === "base" && props.theme.textInput.padding.base) ||
    (props.size === "middle" && props.theme.textInput.padding.middle) ||
    (props.size === "big" && props.theme.textInput.padding.big) ||
    (props.size === "huge" && props.theme.textInput.padding.huge)};

  transition: ${props => props.theme.textInput.transition};

  ::-webkit-input-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  :-moz-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  ::-moz-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  :-ms-input-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  ${props => !props.border && `border: none;`}
`;

StyledTextInput.defaultProps = { theme: Base };

export default StyledTextInput;
