import styled from "styled-components";
import commonInputStyles from "../../utils/commonInputStyles";
import Box from "../Box";
import { Base } from "../../themes";

const StyledDateInput = styled(Box)`
  max-width: ${props => props.theme.datePicker.width};
  width: ${props => props.theme.datePicker.width};
`;

const StyledDropDown = styled(Box)`
  .drop-down {
    padding: ${props => props.theme.datePicker.dropDownPadding};
  }
  position: relative;
`;

const StyledInput = styled(Box)`
  display: flex;

  .text-input-style {
    padding: ${props => props.theme.datePicker.inputPadding};
  }

  ${commonInputStyles} :focus-within {
    border-color: ${props => props.theme.datePicker.inputBorder};
  }

  .date-picker_icon {
    align-items: center;
    margin: 0;
  }

  .icon-block {
    display: flex;
    align-items: center;

    height: ${props => props.theme.datePicker.iconHeight};
    width: ${props => props.theme.datePicker.iconWidth};
    padding: ${props => props.theme.datePicker.iconPadding};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    .calendar-icon {
      cursor: ${props => (props.disabled ? "default" : "pointer")};
    }
  }
`;

StyledDateInput.defaultProps = { theme: Base };
StyledDropDown.defaultProps = { theme: Base };
StyledInput.defaultProps = { theme: Base };

export { StyledDateInput, StyledDropDown, StyledInput };
