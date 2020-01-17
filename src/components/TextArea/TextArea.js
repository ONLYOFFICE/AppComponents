import React from "react";
import PropTypes from "prop-types";
import { StyledTextArea, StyledScrollbar } from "./StyledTextArea";

class TextArea extends React.PureComponent {
  render() {
    // console.log('Textarea render');
    const { disabled, error, warning, onChange, style, ...rest } = this.props;

    const errorProp = error ? 1 : 0;
    const warningProp = warning ? 1 : 0;
    const disabledProp = disabled ? 1 : 0;

    return (
      <StyledScrollbar
        size="medium"
        error={errorProp}
        warning={warningProp}
        disabled={disabledProp}
        style={style}
      >
        <StyledTextArea
          onChange={e => onChange && onChange(e)}
          disabled={disabledProp}
          {...rest}
        />
      </StyledScrollbar>
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  tabIndex: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

TextArea.defaultProps = {
  placeholder: "",
  tabIndex: -1,
  value: ""
};

export default TextArea;
