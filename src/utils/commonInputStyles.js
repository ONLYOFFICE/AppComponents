import { css } from "styled-components";
import { Base } from "../themes";

const commonInputStyle = css`
  box-sizing: ${props => props.theme.input.boxSizing};

  border: ${props => props.theme.input.border};

  border-radius: ${props => props.theme.input.borderRadius};
  -moz-border-radius: ${props => props.theme.input.borderRadius};
  -webkit-border-radius: ${props => props.theme.input.borderRadius};

  box-shadow: ${props => props.theme.input.boxShadow};

  color: ${props =>
    props.disabled ? props.theme.input.disableColor : props.theme.input.color};

  background-color: ${props =>
    props.disabled
      ? props.theme.input.disableBackgroundColor
      : props.theme.input.backgroundColor};

  border-color: ${props =>
    (props.error && props.theme.input.errorBorderColor) ||
    (props.warning && props.theme.input.warningBorderColor) ||
    (props.disabled && props.theme.input.disabledBorderColor) ||
    props.theme.input.borderColor};

  width: ${props =>
    (props.scale && "100%") ||
    (props.size === "base" && props.theme.input.width.base) ||
    (props.size === "middle" && props.theme.input.width.middle) ||
    (props.size === "big" && props.theme.input.width.big) ||
    (props.size === "huge" && props.theme.input.width.huge)};

  :hover {
    border-color: ${props =>
      (props.error && props.theme.input.hoverErrorBorderColor) ||
      (props.warning && props.theme.input.hoverWarningBorderColor) ||
      (props.disabled && props.theme.input.hoverDisabledBorderColor) ||
      props.theme.input.hoverBorderColor};
  }
  :focus {
    border-color: ${props =>
      (props.error && props.theme.input.focusErrorBorderColor) ||
      (props.warning && props.theme.input.focusWarningBorderColor) ||
      (props.disabled && props.theme.input.focusDisabledBorderColor) ||
      props.theme.input.focusBorderColor};
  }

  cursor: ${props => (props.readOnly || props.disabled ? "default" : "text")};
`;

commonInputStyle.defaultProps = { theme: Base };

export default commonInputStyle;
