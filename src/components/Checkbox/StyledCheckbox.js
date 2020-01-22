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
              fill: ${props => props.theme.checkbox.fillColor};
              stroke: ${props => props.theme.checkbox.borderColor};
            }
            path {
              fill: ${props => props.theme.checkbox.arrowColor};
            }
          `
        : css`
            rect:last-child {
              fill: ${props => props.theme.checkbox.indeterminateColor};
            }
          `}

    ${props =>
      props.disabled && !props.indeterminate
        ? css`
            rect {
              fill: ${props => props.theme.checkbox.disableFillColor};
              stroke: ${props => props.theme.checkbox.disableBorderColor};
            }
            path {
              fill: ${props => props.theme.checkbox.disableArrowColor};
            }
          `
        : props.disabled &&
          css`
            rect:last-child {
              fill: ${props => props.theme.checkbox.disableIndeterminateColor};
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
              stroke: ${props => props.theme.checkbox.hoverBorderColor};
            }
            rect:last-child {
              fill: ${props =>
                props.indeterminate &&
                props.theme.checkbox.hoverIndeterminateColor};
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
