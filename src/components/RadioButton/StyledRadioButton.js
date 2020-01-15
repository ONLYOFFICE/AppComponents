import styled, { css } from "styled-components";
import { Base } from "../../themes/index";
import Text from "../Text";

const StyledRadioButton = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  user-select: none;
  cursor: ${props => (!props.disabled ? "pointer" : "default")};

  .radio-button {
    min-width: ${props => props.theme.radioButton.width};
    min-height: ${props => props.theme.radioButton.height};
  }

  ${props => css`
    path:first-child {
      stroke: ${props.theme.radioButton.borderColor};
    }
    path:nth-child(even) {
      fill: ${props.theme.radioButton.fillColor};
    }
  `}

  ${props =>
    props.disabled
      ? css`
          path:first-child {
            stroke: ${props.theme.radioButton.disableBorderColor};
          }
          path:nth-child(even) {
            fill: ${props.theme.radioButton.disableFillColor};
          }
        `
      : css`
          &:hover {
            svg {
              path:first-child {
                stroke: ${props.theme.radioButton.hoverBorderColor};
              }
            }
          }
        `}

  &:not(:first-child) {
    ${props =>
      props.orientation === "horizontal" &&
      css`
        margin-left: ${props.spacing};
      `};
  }

  &:not(:last-child) {
    ${props =>
      props.orientation === "vertical" &&
      css`
        margin-bottom: ${props.spacing};
      `};
  }
`;

const HiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;

const StyledText = styled(Text)`
  ${props => (props.reverse ? `margin-right: 8px` : `margin-left: 8px`)};
  color: ${props =>
    props.disabled ? props.theme.text.disableColor : props.theme.text.color};
`;

StyledRadioButton.defaultProps = { theme: Base };
StyledText.defaultProps = { theme: Base };

export { StyledRadioButton, HiddenInput, StyledText };
