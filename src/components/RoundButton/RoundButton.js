import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import { StyledRoundButton, StyledCrossShape } from "./StyledRoundButton";

class RoundButton extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {

    //console.log("Button render");
    const { disabled, label } = this.props;

    return (
      <StyledRoundButton  {...this.props}>
        <StyledCrossShape disabled={disabled} label={label} />
      </StyledRoundButton>
    );
  }
}

RoundButton.propTypes = {
  label: PropTypes.oneOf(["crossShape", "rectangle"]),
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

RoundButton.defaultProps = {
  label: "crossShape",
  tabIndex: -1,
  disabled: false
};

export default RoundButton;
