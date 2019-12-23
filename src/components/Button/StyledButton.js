import styled, { css } from "styled-components";

const activeCss = css`
  background-color: ${props =>
    props.primary
      ? props.theme.button.backgroundColor.primary
      : props.theme.button.backgroundColor.primaryDisabled};
  color: ${props =>
    props.primary
      ? props.theme.button.color.primary
      : props.theme.button.color.primaryDisableActiveColor};

  ${props => !props.primary && { border: props.theme.button.border.primaryActive }}
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

  ${props => !props.primary && { border: props.theme.button.border.primaryActive }}
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
  !props.disabled || props.isLoading
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
          ? props.theme.button.padding.big.primaryWithIconLabel
          : props.theme.button.padding.big.primaryWithIcon
        : props.label
        ? props.theme.button.padding.big.primaryUnknownLabel
        : props.theme.button.padding.big.primaryUnknown
      : props.icon
      ? props.label
        ? props.theme.button.padding.big.withIconLabel
        : props.theme.button.padding.big.withIcon
      : props.label
      ? props.theme.button.padding.big.unknownLabel
      : props.theme.button.padding.big.unknown)) ||
  (props.size === "medium" &&
    (props.primary
      ? props.icon
        ? props.label
          ? props.theme.button.padding.medium.primaryWithIconLabel
          : props.theme.button.padding.medium.primaryWithIcon
        : props.label
        ? props.theme.button.padding.medium.primaryUnknownLabel
        : props.theme.button.padding.medium.primaryUnknown
      : props.icon
      ? props.label
        ? props.theme.button.padding.medium.withIconLabel
        : props.theme.button.padding.medium.withIcon
      : props.label
      ? props.theme.button.padding.medium.unknownLabel
      : props.theme.button.padding.medium.unknown)) ||
  (props.size === "base" &&
    (props.primary
      ? props.icon
        ? props.label
          ? props.theme.button.padding.base.primaryWithIconLabel
          : props.theme.button.padding.base.primaryWithIcon
        : props.label
        ? props.theme.button.padding.base.primaryUnknownLabel
        : props.theme.button.padding.base.primaryUnknown
      : props.icon
      ? props.label
        ? props.theme.button.padding.base.withIconLabel
        : props.theme.button.padding.base.withIcon
      : props.label
      ? props.theme.button.padding.base.unknownLabel
      : props.theme.button.padding.base.unknown))};

cursor: ${props =>
  props.disabled || props.isLoading ? "default !important" : "pointer"};



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
      !props.disabled && !props.isLoading
        ? props.theme.button.borderColor
        : props.theme.button.disableBorderColor};
  `}

${props =>
  !props.disabled &&
  !props.isLoading &&
  (props.isHovered
    ? hoverCss
    : css`
        &:hover {
          ${hoverCss}
        }
      `)}

${props =>
  !props.disabled &&
  !props.isLoading &&
  (props.isClicked
    ? activeCss
    : css`
        &:active {
          ${activeCss}
        }
      `)}

&:focus {
  outline: ${props => props.theme.button.focus}
}
`;

export default StyledButton;
