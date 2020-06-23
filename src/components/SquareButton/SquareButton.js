import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import { StyledSquareButton, StyledCrossShape } from "./StyledSquareButton";

class SquareButton extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {

    console.log("Button render");

    return (
      <StyledSquareButton  {...this.props}>
        <StyledCrossShape disabled={this.props.disabled}/>
      </StyledSquareButton>
    );
  }
}

SquareButton.propTypes = {
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

SquareButton.defaultProps = {
  tabIndex: -1,
  disabled: false
};

export default SquareButton;
