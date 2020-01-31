import TextareaAutosize from "react-autosize-textarea";
import Scrollbar from "../Scrollbar";
import commonInputStyle from "../../utils/commonInputStyles";
import styled from "styled-components";
import { Base } from "../../themes";

const StyledTextArea = styled(TextareaAutosize)`
  ${commonInputStyle};

  width: ${props => props.theme.textArea.width};
  height: ${props => props.theme.textArea.height};
  border: ${props => props.theme.textArea.border};
  outline: ${props => props.theme.textArea.outline};
  resize: ${props => props.theme.textArea.resize};
  overflow: ${props => props.theme.textArea.overflow};
  padding: ${props => props.theme.textArea.padding};
  font-size: ${props => props.theme.textArea.fontSize};
  line-height: ${props => props.theme.textArea.lineHeight};

  :focus-within {
    border-color: ${props => props.theme.textArea.focusBorderColor};
  }

  :focus {
    outline: ${props => props.theme.textArea.focusOutline};
  }

  ::-webkit-input-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  :-moz-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  ::-moz-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }

  :-ms-input-placeholder {
    color: ${props =>
      props.disabled
        ? props.theme.textInput.disablePlaceholderColor
        : props.theme.textInput.placeholderColor};
  }
`;

const StyledScrollbar = styled(Scrollbar)`
  ${commonInputStyle};
  :focus-within {
    border-color: ${props => props.theme.textArea.focusBorderColor};
  }
  :focus {
    outline: ${props => props.theme.textArea.focusOutline};
  }
  width: ${props => props.theme.textArea.scrollWidth};
  height: ${props => props.theme.textArea.scrollHeight};
`;

StyledTextArea.defaultProps = {
  theme: Base
};

StyledScrollbar.defaultProps = {
  theme: Base
};

export { StyledTextArea, StyledScrollbar };
