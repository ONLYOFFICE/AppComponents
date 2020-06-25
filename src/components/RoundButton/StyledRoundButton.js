import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import { NoUserSelect } from "../../utils/commonStyles";

const clickCss = css`
  &:active {
    background-color: ${props => props.theme.roundButton.click.backgroundColor};
  }
`;

const hoverCss = css`
  &:hover {
    background-color: ${props => props.theme.roundButton.hover.backgroundColor};
  }
`;

const focusCss = css`
  &:focus {
    outline: ${props => props.theme.roundButton.outline};
  }
`;

const backgroundColor = props => props.disabled
  ? props.theme.roundButton.disable.backgroundColor
  : props.theme.roundButton.backgroundColor;

const StyledRoundButton = styled.button.attrs(props => ({
  disabled: props.disabled ? "disabled" : "",
  tabIndex: props.tabIndex
}))`
${NoUserSelect};
width: ${props => props.theme.roundButton.width};
height: ${props => props.theme.roundButton.height};
background-color: ${props => backgroundColor(props)};
box-sizing: "border-box";
border-style: ${props => props.theme.roundButton.borderStyle};
border-radius: ${props => props.theme.roundButton.borderRadius[`${props.type}`]};
cursor: ${props => (props.disabled ? "default" : "pointer")};
${props => !props.disabled && hoverCss}
${props => !props.disabled && clickCss}
${focusCss}
`;

const CrossShapeColor = props => props.disabled
  ? props.theme.roundButton.plus.color
  : props.theme.roundButton.plus.disable.color;

const StyledCrossShape = styled.div`
position: relative;
background: ${props => CrossShapeColor(props)};
height: 2px;
width: 16px;
left: 6px;
   &:after {
    position: absolute;
    display: ${props => props.type === "minus" ? "none" : null};
    content: "";
    background: ${props => CrossShapeColor(props)};
    height: 16px;
    width: 2px;
    left: 7px;
    top: -7px;
    }
`;

StyledRoundButton.defaultProps = { theme: Base };
StyledCrossShape.defaultProps = { theme: Base };

export { StyledRoundButton, StyledCrossShape };