import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import { NoUserSelect } from "../../utils/commonStyles";

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  ${NoUserSelect};

  svg {
    ${props =>
      !props.indeterminate
        ? css`
            rect {
              fill: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.fillColor
                  : props.color};
              stroke: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.borderColor
                  : props.color};
            }
            path {
              fill: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.arrowColor
                  : "white"};
            }
          `
        : css`
            rect {
              fill: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.fillColor
                  : props.color};
              stroke: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.borderColor
                  : props.color};
            }
            rect:last-child {
              fill: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.indeterminateColor
                  : "white"};
            }
          `}

    ${props =>
      props.disabled && !props.indeterminate
        ? css`
            filter: ${props =>
              props.color !== "#FFFF" ? "opacity(30%)" : "opacity(100%)"};
            rect {
              fill: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.disableFillColor
                  : props.color};
              stroke: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.disableBorderColor
                  : props.color};
            }
            path {
              fill: ${props => props.theme.checkbox.disableArrowColor};
            }
          `
        : props.disabled &&
          css`
            filter: ${props =>
              props.color !== "#FFFF" ? "opacity(30%)" : "opacity(100%)"};
            rect:last-child {
              fill: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.disableIndeterminateColor
                  : "rgba(255,255,255,0.7)"};
            }
          `}
  }

  &:hover {
    ${props =>
      props.disabled
        ? css`
            cursor: default;
          `
        : css`
            cursor: pointer;
            rect:first-child {
              stroke: ${props =>
                props.color === "#FFFF"
                  ? props.theme.checkbox.hoverBorderColor
                  : "rgba(0,0,0,0.3)"};
            }
            rect:last-child {
              fill: ${props =>
                props.indeterminate && props.color === "#FFFF"
                  ? props.theme.checkbox.hoverIndeterminateColor
                  : props.indeterminate
                  ? "white"
                  : props.color};
            }
          `}
  }

  .checkbox-text {
    ${props => (props.reverse ? `margin-right: 8px` : `margin-left: 8px`)};
    color: ${props =>
      props.disabled ? props.theme.text.disableColor : props.theme.text.color};
  }
`;

const StyledHiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;

StyledCheckbox.defaultProps = { theme: Base };

export { StyledCheckbox, StyledHiddenInput };
