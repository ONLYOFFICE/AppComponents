import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import StyledButton from "./StyledButton";

const Icon = ({ size, primary, icon }) => (
  <div className="btnIcon">
    {icon &&
      React.cloneElement(icon, {
        isfill: true,
        size: size === "big" ? "medium" : "small",
        color: primary ? "#FFFFFF" : "#333333"
      })}
  </div>
);

Icon.propTypes = {
  icon: PropTypes.node,
  size: PropTypes.string,
  primary: PropTypes.bool
};

Icon.defaultProps = {
  icon: null
};

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    //console.log("Button render", this.props);
    const { label, icon } = this.props;

    return (
      <StyledButton {...this.props}>
        {icon ? <Icon {...this.props} /> : null}
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
  icon: PropTypes.node,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  loaded: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: "",
  primary: false,
  size: "base",
  scale: false,
  icon: null,
  tabIndex: -1,
  disabled: false,
  loaded: false
};

export default Button;
