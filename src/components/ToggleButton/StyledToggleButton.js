import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const StyledToggleButton = styled.label`
  position: relative;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  outline: none;
  user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;

  ${props =>
    props.disabled
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;
        `}

  ${props =>
    props.checked && !props.disabled
      ? css`
          svg {
            rect {
              fill: ${props.theme.toggleButton.fillColor};
            }
          }
        `
      : props.checked && props.disabled
      ? css`
          svg {
            rect {
              fill: ${props.theme.toggleButton.disableFillColor};
            }
          }
        `
      : !props.disabled
      ? css`
          svg {
            rect {
              fill: ${props.theme.toggleButton.fillColorOff};
            }
          }
        `
      : css`
          svg {
            rect {
              fill: ${props.theme.toggleButton.disableFillColorOff};
            }
          }
        `}

  .toggleText {
    margin-left: 8px;
  }
`;

const HiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;

StyledToggleButton.defaultProps = { theme: Base };

export { StyledToggleButton, HiddenInput };
