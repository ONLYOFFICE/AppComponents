import React from "react";
import PropTypes from "prop-types";
import { StyledTextArea, StyledScrollbar } from "./StyledTextArea";

class TextArea extends React.PureComponent {
  render() {
    // console.log('Textarea render');
    const {
      disabled,
      readOnly,
      maxLength,
      name,
      onChange,
      placeholder,
      tabIndex,
      value
    } = this.props;
    return (
      <StyledScrollbar size="medium" {...this.props} disabled={disabled ? 1 : 0}>
        <StyledTextArea
          placeholder={placeholder}
          onChange={e => onChange && onChange(e)}
          maxLength={maxLength}
          name={name}
          tabIndex={tabIndex}
          disabled={disabled ? 1 : 0}
          readOnly={readOnly}
          value={value}
          {...this.props}
        />
      </StyledScrollbar>
    );
  }
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.string
};

TextArea.defaultProps = {
  disabled: false,
  readOnly: false,
  placeholder: "",
  tabIndex: -1,
  value: ""
};

export default TextArea;
