import React from "react";
import PropTypes from "prop-types";
import StyledHeading from "./StyledHeading";

const Heading = ({ level, id, className, style, ...rest }) => {
  //console.log("Heading render", rest)
  return (
    <StyledHeading
      as={`h${level}`}
      id={id}
      className={className}
      style={style}
      {...rest}
    />
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.string,
  title: PropTypes.string,
  truncate: PropTypes.bool,
  isInline: PropTypes.bool,
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string
};

Heading.defaultProps = {
  truncate: false,
  isInline: false,
  size: "large",
  level: 1
};

export default Heading;
