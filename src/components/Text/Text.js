import React from "react";
import PropTypes from 'prop-types';
import StyledText from "./StyledText";


const Text = ({ title, tag, as, ...rest }) => {
  //console.log("Text render", rest)
  return (
    <StyledText as={!as && tag ? tag : as} title={title} {...rest} />
  );
};

Text.propTypes = {
  as: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.number,
  backgroundColor: PropTypes.string,
  truncate: PropTypes.bool,
  isBold: PropTypes.bool,
  isInline: PropTypes.bool,
  isItalic: PropTypes.bool,
  display: PropTypes.string
};

Text.defaultProps = {
  title: '',
  fontSize: 13,
  truncate: false,
  isBold: false,
  isInline: false,
  isItalic: false,
};

export default Text;