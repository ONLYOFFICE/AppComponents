import React from "react";
import PropTypes from "prop-types";
import StyledHeading from "./StyledHeading";

const Heading = ({ level, ...rest }) => {
  //console.log("Heading render", rest)
  return <StyledHeading as={`h${level}`} {...rest} />;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.string,
  title: PropTypes.string,
  truncate: PropTypes.bool,
  inline: PropTypes.bool,
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"])
};

Heading.defaultProps = {
  truncate: false,
  inline: false,
  size: "large",
  level: 1
};

export default Heading;
