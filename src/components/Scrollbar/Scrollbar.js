import React from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import StyledScrollbar from "./StyledScrollbar";
import { ScrollStyles } from "../../utils/commonStyles";

const Scrollbar = React.forwardRef((props, ref) => {
  //console.log("Scrollbar render");
  const scrollbarType = ScrollStyles;
  const stype = scrollbarType[props.stype];

  const thumbV = stype ? stype.thumbV : {};
  const thumbH = stype ? stype.thumbH : {};
  const view = stype ? stype.view : {};

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
      renderView={renderView}
      renderThumbVertical={renderNavThumbVertical}
      renderThumbHorizontal={renderNavThumbHorizontal}
      {...props}
      ref={ref}
    />
  );
});

Scrollbar.propTypes = {
  stype: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Scrollbar.defaultProps = {
  stype: "smallBlack"
};

export default Scrollbar;
