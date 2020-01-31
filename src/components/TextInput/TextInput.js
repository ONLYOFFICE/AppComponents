import React from "react";
import isEqual from "lodash/isEqual";
import StyledTextInput from "./StyledTextInput";

class TextInput extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    //console.log(`TextInput render`);
    return <StyledTextInput {...this.props} />;
  }
}

TextInput.defaultProps = {
  type: "text",
  value: "",
  maxLength: 255,
  size: "base",
  tabIndex: -1,
  autoComplete: "off",
  border: true,
  keepCharPositions: false
};

export default TextInput;
