import React from "react";
import PropTypes from "prop-types";
import StyledDropdownItem from "./StyledDropDownItem";

const DropDownItem = props => {
  //console.log("DropDownItem render");
  const { separator, label, children, disabled, onClick } = props;

  const onClickAction = () => {
    onClick && !disabled && onClick();
  };

  return (
    <StyledDropdownItem {...props} onClick={onClickAction}>
      {separator ? "\u00A0" : label ? label : children && children}
    </StyledDropdownItem>
  );
};

DropDownItem.propTypes = {
  separator: PropTypes.bool,
  header: PropTypes.bool,
  tabIndex: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  noHover: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any
};

DropDownItem.defaultProps = {
  separator: false,
  header: false,
  tabIndex: -1,
  label: "",
  disabled: false,
  noHover: false
};

export default DropDownItem;
