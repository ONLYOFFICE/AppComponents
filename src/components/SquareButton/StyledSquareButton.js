import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import { NoUserSelect } from "../../utils/commonStyles";

const clickCss = css`
  &:active {
    background-color: ${props => props.theme.squareButton.click.backgroundColor};
    border: ${props => props.theme.squareButton.click.border};
  }
`;

const hoverCss = css`
  &:hover {
    background-color: ${props => props.theme.squareButton.hover.backgroundColor};
    border: ${props => props.theme.squareButton.hover.border};
  }
`;

const focusCss = css`
  &:focus {
    outline: ${props => props.theme.squareButton.outline};
  }
`;

const backgroundColor = props => props.disabled
  ? props.theme.squareButton.disable.backgroundColor
  : props.theme.squareButton.backgroundColor;

const borderStyle = props => props.disabled
  ? props.theme.squareButton.disable.border
  : props.theme.squareButton.border;

const StyledSquareButton = styled.button.attrs(props => ({
  disabled: props.disabled ? "disabled" : "",
  tabIndex: props.tabIndex
}))`
${NoUserSelect};
width: ${props => props.theme.squareButton.width};
height: ${props => props.theme.squareButton.height};
background-color: ${props => backgroundColor(props)};
border: ${props => borderStyle(props)};
box-sizing: "border-box";
border-radius: ${props => props.theme.squareButton.borderRadius};
cursor: ${props => (props.disabled ? "default" : "pointer")};
${props => !props.disabled && hoverCss}
${props => !props.disabled && clickCss}
${focusCss}
`;

const CrossShapeColor = props => props.disabled
  ? props.theme.squareButton.crossShape.color
  : props.theme.squareButton.crossShape.disable.color;

const StyledCrossShape = styled.div`
position: relative;
background: ${props => CrossShapeColor(props)};
height: 14px;
width: 2px;
left: 8px;
   &:after {
    position: absolute;
    content: "";
    background: ${props => CrossShapeColor(props)};
    height: 2px;
    width: 14px;
    left: -6px;
    top: 6px;
    }
`;

StyledSquareButton.defaultProps = { theme: Base };
StyledCrossShape.defaultProps = { theme: Base };

export { StyledSquareButton, StyledCrossShape };