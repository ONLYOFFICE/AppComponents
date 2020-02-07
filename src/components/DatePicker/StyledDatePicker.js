import styled from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Box from "../Box";
import { Base } from "../../themes";

const StyledDatePicker = styled(Box)`
  display: flex;
  position: relative;
  max-width: ${props => props.theme.datePicker.width};
  width: ${props => props.theme.datePicker.width};
  ${commonInputStyles} :focus-within {
    border-color: ${props => props.theme.datePicker.inputBorder};
  }

  .date-picker-input {
    padding: ${props => props.theme.datePicker.inputPadding};
  }

  .date-picker-icon {
    padding: ${props => props.theme.datePicker.iconPadding};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: ${props => (props.disabled ? "default" : "pointer")};
  }

  .date-picker-drop-down {
    padding: ${props => props.theme.datePicker.dropDownPadding};
  }
`;

StyledDatePicker.defaultProps = { theme: Base };

export { StyledDatePicker };
