import React from "react";
import PropTypes from "prop-types";
import StyledText from "./StyledText";

const Text = ({ title, tag, as, ...rest }) => {
  //console.log("Text render", rest)
  return <StyledText as={!as && tag ? tag : as} title={title} {...rest} />;
};

Text.propTypes = {
  as: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  truncate: PropTypes.bool,
  bold: PropTypes.bool,
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  display: PropTypes.string
};

Text.defaultProps = {
  fontSize: 13,
  truncate: false,
  bold: false,
  inline: false,
  italic: false
};

export default Text;
