import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import StyledButton from "./StyledButton";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    //console.log("Button render", this.props);
    const { label } = this.props;
    const { scale, ...rest } = this.props;

    return (
      <StyledButton scale={scale ? 1 : 0} {...rest}>
        {label}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["base", "medium", "big"]),
  scale: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: "",
  primary: false,
  size: "base",
  scale: false,
  tabIndex: -1,
  disabled: false
};

export default Button;
