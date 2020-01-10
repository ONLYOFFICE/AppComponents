import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import Text from "../Text";

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  .checkbox {
    margin-right: 8px;
  }

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
`;

const HiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;

const StyledText = styled(Text)`
  color: ${props =>
    props.disabled ? props.theme.text.disableColor : props.theme.text.color};
`;

StyledCheckbox.defaultProps = { theme: Base };
StyledText.defaultProps = { theme: Base };

export { StyledCheckbox, HiddenInput, StyledText };
