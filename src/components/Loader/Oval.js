import React from "react";
import PropTypes from "prop-types";
import { StyledOval } from "./StyledLoader";

export const Oval = ({ label, fillColor, ...rest }) => (
  <StyledOval
    {...rest}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={label}
  >
    <g fillRule="evenodd" fill={fillColor ? fillColor : "none"}>
      <g transform="translate(1 1)">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </StyledOval>
);

Oval.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  fillColor: PropTypes.string
};
