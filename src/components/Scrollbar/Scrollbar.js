import React from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import StyledScrollbar from "./StyledScrollbar";
import { ScrollStyles } from "../../utils/commonStyles";

const Scrollbar = React.forwardRef((props, ref) => {
  //console.log("Scrollbar render");
  const scrollbarType = ScrollStyles;
  const size = scrollbarType[props.size];

  const thumbV = size ? size.thumbV : {};
  const thumbH = size ? size.thumbH : {};
  const view = size ? size.view : {};

  const renderNavThumbVertical = ({ style, ...props }) => (
    <Box
      className="nav-thumb-vertical"
      {...props}
      style={{ ...style, ...thumbV }}
    />
  );

  const renderNavThumbHorizontal = ({ style, ...props }) => (
    <Box
      className="nav-thumb-horizontal"
      {...props}
      style={{ ...style, ...thumbH }}
    />
  );

  const renderView = ({ style, ...props }) => (
    <Box {...props} style={{ ...style, ...view }} className="scroll-body" />
  );

  return (
    <StyledScrollbar
      color={props.color}
      renderView={renderView}
      renderThumbVertical={renderNavThumbVertical}
      renderThumbHorizontal={renderNavThumbHorizontal}
      {...props}
      ref={ref}
    />
  );
});

Scrollbar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "big"]),
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Scrollbar.defaultProps = {
  size: "medium"
};

export default Scrollbar;
