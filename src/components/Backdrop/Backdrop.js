import React from "react";
import PropTypes from "prop-types";
import StyledBackdrop from "./StyledBackdrop";

const Backdrop = props => {
  //console.log("Backdrop render");
  return <StyledBackdrop {...props} />;
};

Backdrop.propTypes = {
  visible: PropTypes.bool,
  zIndex: PropTypes.number
};

Backdrop.defaultProps = {
  visible: false,
  zIndex: 200
};

export default Backdrop;
