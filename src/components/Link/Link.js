import React, { memo } from "react";
import PropTypes from "prop-types";
import StyledLink from "./StyledLink";

const Link = memo(({ textOverflow, noHover, ...rest }) => {
  //console.log("Link render", rest);

  return (
    <StyledLink
      tag="a"
      textOverflow={textOverflow}
      noHover={noHover}
      truncate={textOverflow}
      {...rest}
    />
  );
});

Link.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  href: PropTypes.string,
  bold: PropTypes.bool,
  hovered: PropTypes.bool,
  semitransparent: PropTypes.bool,
  textOverflow: PropTypes.bool,
  noHover: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  type: PropTypes.oneOf(["action", "page"]),
  rel: PropTypes.string
};

Link.defaultProps = {
  fontSize: "13px",
  href: undefined,
  bold: false,
  hovered: false,
  semitransparent: false,
  textOverflow: false,
  noHover: false,
  rel: "noopener noreferrer",
  tabIndex: -1,
  type: "page"
};

Link.displayName = "Link";

export default Link;
