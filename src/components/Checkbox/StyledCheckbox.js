import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

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

  &:hover {
    ${props =>
      props.disabled
        ? css`
            cursor: default;
          `
        : css`
            cursor: pointer;
            rect:first-child {
              stroke: #a3a9ae;
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

StyledCheckbox.defaultProps = { theme: Base };

export { StyledCheckbox, HiddenInput };
