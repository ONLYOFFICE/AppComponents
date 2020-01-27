import React from "react";
import PropTypes from "prop-types";
import { Oval } from "./Oval";
import { DualRing } from "./DualRing";
import Text from "../Text";

const Loader = props => {
  const { type, color, size, label, style } = props;
  const { fillColor, ...rest } = props;

  const svgRenderer = type => {
    switch (type) {
      case "oval":
        return <Oval fillColor={fillColor} {...rest} />;
      case "dual-ring":
        return <DualRing {...rest} />;
      default:
        return (
          <span style={{ ...style }}>
            <Text color={color} fontSize={size}>
              {label}
            </Text>
          </span>
        );
    }
  };

  return (
    <div aria-busy="true" {...rest}>
      {svgRenderer(type)}
    </div>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  fillColor: PropTypes.string,
  type: PropTypes.oneOf(["base", "oval", "dual-ring"]),
  size: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Loader.defaultProps = {
  size: "40px",
  label: "Loading please wait."
};

export default Loader;
