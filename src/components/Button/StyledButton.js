import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import { NoUserSelect } from "../../utils/commonStyles";

const activeCss = css`
  &:active {
    background-color: ${props =>
      props.primary
        ? props.theme.button.backgroundColor.primaryActive
        : props.theme.button.backgroundColor.baseActive};
    border: ${props =>
      props.primary
        ? props.theme.button.border.primaryActive
        : props.theme.button.border.baseActive};
  }
`;

const hoverCss = css`
  &:hover {
    background-color: ${props =>
      props.primary
        ? props.theme.button.backgroundColor.primaryHover
        : props.theme.button.backgroundColor.baseHover};
    border: ${props =>
      props.primary
        ? props.theme.button.border.primaryHover
        : props.theme.button.border.baseHover};
  }
`;

const focusCss = css`
  &:focus {
    outline: ${props => props.theme.button.outline};
  }
`;

const heightStyle = props => props.theme.button.height[props.size];
const lineHeightStyle = props => props.theme.button.lineHeight[props.size];
const fontSizeStyle = props => props.theme.button.fontSize[props.size];
const paddingStyle = props => props.theme.button.padding[props.size];
const minWidthStyle = props => props.theme.button.minWidth[props.size];

const colorStyle = props =>
  (props.primary && props.theme.button.color.primary) ||
  (props.disabled
    ? props.theme.button.color.disabled
    : props.theme.button.color.base);

const backgroundColorStyle = props =>
  props.primary
    ? props.disabled
      ? props.theme.button.backgroundColor.primaryDisabled
      : props.theme.button.backgroundColor.primary
    : props.disabled
    ? props.theme.button.backgroundColor.baseDisabled
    : props.theme.button.backgroundColor.base;

const borderStyle = props =>
  props.primary
    ? props.disabled
      ? props.theme.button.border.primaryDisabled
      : props.theme.button.border.primary
    : props.disabled
    ? props.theme.button.border.baseDisabled
    : props.theme.button.border.base;

const StyledButton = styled.button.attrs(props => ({
  disabled: props.disabled ? "disabled" : "",
  tabIndex: props.tabIndex
}))`
font-family: ${props => props.theme.fontFamily};
font-weight: ${props => props.theme.button.fontWeight};
box-sizing: "border-box";
margin: ${props => props.theme.button.margin};
display: ${props => props.theme.button.display};
text-align: ${props => props.theme.button.textAlign};
text-decoration: ${props => props.theme.button.textDecoration};
vertical-align: ${props => props.theme.button.verticalAlign};
border-radius: ${props => props.theme.button.borderRadius};
-moz-border-radius: ${props => props.theme.button.borderRadius};
-webkit-border-radius: ${props => props.theme.button.borderRadius};

${NoUserSelect};

stroke: ${props => props.theme.button.stroke};
overflow: ${props => props.theme.button.overflow};
text-overflow: ${props => props.theme.button.textOverflow};
white-space: ${props => props.theme.button.whiteSpace};
outline: ${props => props.theme.button.outline};
height: ${props => heightStyle(props)};
line-height: ${props => lineHeightStyle(props)};
font-size: ${props => fontSizeStyle(props)};
padding: ${props => paddingStyle(props)};
min-width: ${props => minWidthStyle(props)};
color: ${props => colorStyle(props)};
background-color: ${props => backgroundColorStyle(props)};
border: ${props => borderStyle(props)};
width: ${props => (props.scale ? "100%" : "")};
cursor: ${props => (props.disabled ? "default !important" : "pointer")};
${props => !props.disabled && hoverCss}
${props => !props.disabled && activeCss}
${focusCss}
`;

StyledButton.defaultProps = { theme: Base };

export default StyledButton;
