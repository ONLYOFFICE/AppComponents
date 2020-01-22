import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import { NoUserSelect } from "../../utils/commonStyles";

const StyledToggleButton = styled.label`
  position: relative;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  outline: none;

  ${NoUserSelect};

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

  .toggle-button-text {
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

StyledToggleButton.defaultProps = { theme: Base };

export { StyledToggleButton, StyledHiddenInput };
