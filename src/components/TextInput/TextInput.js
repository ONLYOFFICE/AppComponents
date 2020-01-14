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

export default TextInput;
