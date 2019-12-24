import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const activeCss = css`
  background-color: ${props =>
    props.primary
      ? props.theme.button.backgroundColor.primary
      : props.theme.button.backgroundColor.primaryDisabled};
  color: ${props =>
    props.primary
      ? props.theme.button.color.primary
      : props.theme.button.color.primaryDisableActiveColor};

  ${props =>
    !props.primary && { border: props.theme.button.border.primaryActive }}
`;

const hoverCss = css`
  background-color: ${props =>
    props.primary
      ? props.theme.button.backgroundColor.primaryHover
      : props.theme.button.backgroundColor.base};
  color: ${props =>
    props.primary
      ? props.theme.button.color.primary
      : props.theme.button.color.primaryDisableActiveColor};

  ${props =>
    !props.primary && { border: props.theme.button.border.primaryActive }}
`;

const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled || props.loaded ? "disabled" : "",
  tabIndex: props.tabIndex
}))`
box-sizing: border-box;
margin: 0;
font-family: ${props => props.theme.fontFamily};
font-weight: ${props => props.theme.button.fontWeight};

height: ${props =>
  (props.size === "big" && props.theme.button.height.big) ||
  (props.size === "medium" && props.theme.button.height.medium) ||
  (props.size === "base" && props.theme.button.height.base)};

line-height: ${props =>
  (props.size === "big" && props.theme.button.lineHeight.big) ||
  (props.size === "medium" && props.theme.button.lineHeight.medium) ||
  (props.size === "base" && props.theme.button.lineHeight.base)};

font-size: ${props =>
  (props.size === "big" && props.theme.button.fontSize.big) ||
  (props.size === "medium" && props.theme.button.fontSize.medium) ||
  (props.size === "base" && props.theme.button.fontSize.base)};

color: ${props =>
  (props.primary && props.theme.button.primaryColor) ||
  (!props.disabled
    ? props.theme.button.color.base
    : props.theme.button.color.disabled)};


background-color: ${props =>
  !props.disabled || props.loaded
    ? props.primary
      ? props.theme.button.primaryBackground
      : props.theme.button.background
    : props.primary
    ? props.theme.button.disabledBackground
    : props.theme.button.background};

${props => props.scale && `width: 100%;`}

padding: ${props =>
  (props.size === "big" &&
    (props.primary
      ? props.icon
        ? props.label
          ? props.theme.button.padding.big.primaryWithLabel
          : props.theme.button.padding.big.primaryWithoutLabel
        : props.label
        ? props.theme.button.padding.big.primaryWithoutIconLabel
        : props.theme.button.padding.big.primaryWithoutIcon
      : props.icon
      ? props.label
        ? props.theme.button.padding.big.baseWithIconLabel
        : props.theme.button.padding.big.baseWithIcon
      : props.label
      ? props.theme.button.padding.big.baseWithoutIconLabel
      : props.theme.button.padding.big.baseWithoutIcon)) ||
  (props.size === "medium" &&
    (props.primary
      ? props.icon
        ? props.label
          ? props.theme.button.padding.medium.primaryWithLabel
          : props.theme.button.padding.medium.primaryWithoutLabel
        : props.label
        ? props.theme.button.padding.medium.primaryWithoutIconLabel
        : props.theme.button.padding.medium.primaryWithoutIcon
      : props.icon
      ? props.label
        ? props.theme.button.padding.medium.baseWithIconLabel
        : props.theme.button.padding.medium.baseWithIcon
      : props.label
      ? props.theme.button.padding.medium.baseWithoutIconLabel
      : props.theme.button.padding.medium.baseWithoutIcon)) ||
  (props.size === "base" &&
    (props.primary
      ? props.icon
        ? props.label
          ? props.theme.button.padding.base.primaryWithLabel
          : props.theme.button.padding.base.primaryWithoutLabel
        : props.label
        ? props.theme.button.padding.base.primaryWithoutIconLabel
        : props.theme.button.padding.base.primaryWithoutIcon
      : props.icon
      ? props.label
        ? props.theme.button.padding.base.baseWithIconLabel
        : props.theme.button.padding.base.baseWithIcon
      : props.label
      ? props.theme.button.padding.base.baseWithoutIconLabel
      : props.theme.button.padding.base.baseWithoutIcon))};

cursor: ${props =>
  props.disabled || props.loaded ? "default !important" : "pointer"};

border: ${props => props.theme.button.border.primary};
display: ${props => props.theme.button.primary.display};
text-align: ${props => props.theme.button.primary.textAlign};
text-decoration: ${props => props.theme.button.primary.textDecoration};
vertical-align: ${props => props.theme.button.primary.verticalAlign};
border-radius: ${props => props.theme.button.primary.borderRadius};
-moz-border-radius: ${props => props.theme.button.primary.borderRadius};
-webkit-border-radius: ${props => props.theme.button.primary.borderRadius};
touch-callout: ${props => props.theme.button.primary.touchCallout};
-o-touch-callout: ${props => props.theme.button.primary.touchCallout};
-moz-touch-callout: ${props => props.theme.button.primary.touchCallout};
-webkit-touch-callout: ${props => props.theme.button.primary.touchCallout};
user-select: ${props => props.theme.button.primary.userSelect};
-o-user-select: ${props => props.theme.button.primary.userSelect};
-moz-user-select: ${props => props.theme.button.primary.userSelect};
-webkit-user-select: ${props => props.theme.button.primary.userSelect};
stroke: ${props => props.theme.button.primary.stroke};
overflow: ${props => props.theme.button.primary.overflow};
text-overflow: ${props => props.theme.button.primary.textOverflow};
white-space: ${props => props.theme.button.primary.whiteSpace};

${props =>
  !props.primary &&
  css`
    border: ${props => props.theme.button.border.base};
    border-color: ${props =>
      !props.disabled && !props.loaded
        ? props.theme.button.borderColor
        : props.theme.button.disableBorderColor};
  `}

${props =>
  !props.disabled &&
  !props.loaded &&
  css`
    &:hover {
      ${hoverCss}
    }
  `}

${props =>
  !props.disabled &&
  !props.loaded &&
  css`
    &:active {
      ${activeCss}
    }
  `}

&:focus {
  outline: ${props => props.theme.button.focus}
}
`;

StyledButton.defaultProps = { theme: Base };

export default StyledButton;
